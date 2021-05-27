import RetornaData, { RetornaCupom } from '../../utils/data';
import fromBase64 from '../../utils/base64';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_EMAIL,
      private_key: fromBase64(process.env.SHEET_KEY),
    });
    await doc.loadInfo();

    const sheet2 = doc.sheetsByIndex[2];
    await sheet2.loadCells('A3:B3');

    const mostrarPromocaoCell = sheet2.getCell(2, 0);
    const textoPromocaoCell = sheet2.getCell(2, 1);

    let Cupom = '';
    let Promo = '';

    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = RetornaCupom();
      Promo = textoPromocaoCell.value;
    }

    const sheet1 = doc.sheetsByIndex[1];

    const user = JSON.parse(req.body);

    const Data = new Date();
    Data.toLocaleString('pt-br', { timeZone: 'America/Sao_Paulo' });

    await sheet1.addRow({
      Nome: user.Nome,
      Whatsapp: user.Whatsapp,
      Email: user.Email,
      Cupom,
      Data: RetornaData(),
      Nota: user.Nota,
      Promo,
    });

    // enviando os dados para a planilha
    res.end(
      JSON.stringify({
        showCupom: Cupom !== '',
        Cupom,
        Promo,
      })
    );
  } catch (error) {
    console.log(error);
    res.end('error');
  }
};
