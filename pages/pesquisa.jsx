import React, { useState } from 'react';

function PesquisaPage() {
  const [form, setForm] = useState({
    Nome: '',
    Whatsapp: '',
    Email: '',
  });

  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const onChange = (evt) => {
    // necessário guardar em cache o valor antes de usar
    const value = evt.target.value;
    const key = evt.target.name;
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  async function save() {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (error) {}
  }

  return (
    <div>
      <div>
        <h1 className='font-bold my-4 text-center text-2xl'>
          Críticas e Sugestões
        </h1>
        <p className='m-4 text-center'>
          O restaurante X sempre busca por atender da melhor maneira seus
          clientes.
          <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
        </p>
      </div>

      {!sucess && (
        <div className='items-center'>
          <div className='py-2'>
            <label className='px-2 font-bold'>Seu nome:</label>
            <input
              name='Nome'
              onChange={onChange}
              value={form.Nome}
              placeholder='Nome'
              type='text'
              className='block h-8 mx-auto md:w-1/5 sm:w-4/5 bg-blue-100 rounded-lg shadow-lg'
            ></input>
          </div>
          <div className='py-2'>
            <label className='px-2 font-bold'>Seu e-mail:</label>
            <input
              name='Email'
              onChange={onChange}
              value={form.Email}
              placeholder='Email'
              type='e-mail'
              className='block h-8 mx-auto md:w-1/5 sm:w-4/5 bg-blue-100 rounded-lg shadow-lg'
            ></input>
          </div>
          <div className='py-2'>
            <label className='px-2 font-bold'>Seu whats:</label>
            <input
              name='Whatsapp'
              onChange={onChange}
              value={form.Whatsapp}
              placeholder='Whatsapp'
              type='text'
              className='block h-8 mx-auto md:w-1/5 sm:w-4/5 bg-blue-100 rounded-lg shadow-lg'
            ></input>
          </div>
          <div className='py-2'>
            <label className='px-2 font-bold'>Sugestão ou crítica:</label>
            <input
              placeholder='Sugestão/Crítica'
              type='text'
              className='block h-8 mx-auto md:w-1/5 sm:w-4/5 bg-blue-100 rounded-lg shadow-lg'
            ></input>
            <button
              onClick={save}
              className='rounded-lg shadow-lg mt-8 w-56 p-4 bg-blue-200 hover:bg-blue-300 font-bold'
            >
              Salvar
            </button>
          </div>
        </div>
      )}
      {sucess && (
        <div className='w-3/5 mx-auto'>
          <p className='bg-blue-100 border-t border-blue-500 text-blue-700 px-4 py-3'>
            Obrigado por contribuir com nossa pesquisa!
            <br />
            Utilize o cupom abaixo para garantir um desconto na sua próxima
            compra.
          </p>
          <br />
          Cupom:{' '}
          <p className='border bg-red-200 font-bold text-xl'>
            {retorno.Cupom}
          </p>{' '}
          <br />
          Promoção: {retorno.Promo}
        </div>
      )}
    </div>
  );
}

export default PesquisaPage;
