import RetornaData, { RetornaCupom } from '../../utils/data';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from '../../credentials.json';

const doc = new GoogleSpreadsheet(
  '1sUj7Y6p8gH69dLxjgcisH7WXlo2mzd8a9DhqhB3WPBI'
);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth(credentials);
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
      Nota: 5,
      Promo,
    });

    // enviando os dados para a planilha
    res.end(req.body);
  } catch (error) {
    console.log(error);
    res.end('error');
  }
};
