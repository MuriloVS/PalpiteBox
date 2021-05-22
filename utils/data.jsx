function FormataNumero(num) {
  return num >= 10 ? num : `0${num}`;
}

function RetornaData() {
  const data = new Date();
  const dia = FormataNumero(data.getDate());
  const mes = FormataNumero(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = FormataNumero(data.getHours());
  const min = FormataNumero(data.getMinutes());
  const seg = FormataNumero(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

export function RetornaCupom() {
  const data = new Date();
  const dia = FormataNumero(data.getDate());
  const hora = FormataNumero(data.getHours());
  const min = FormataNumero(data.getMinutes());
  const seg = FormataNumero(data.getSeconds());

  let mili = data.getMilliseconds();
  if (mili < 10) {
    mili = `00${mili}`;
  } else if (mili < 100) {
    mili = `0${mili}`;
  }

  const cupom = parseInt(`${dia}${hora}${min}${seg}${mili}`)
    .toString(16)
    .toUpperCase();

  return cupom.substr(0, 5) + '-' + cupom.substr(5, 10);
}

export default RetornaData;
