import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <p className='m-4 text-center'>
        O restaurante X sempre busca por atender da melhor maneira seus
        clientes.
        <br /> Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div>
        <button className='rounded-lg shadow-lg my-4 w-56 p-4 bg-blue-200 hover:bg-blue-300 font-bold'>
          <Link href='/pesquisa'>Dar opinião ou sugestão</Link>
        </button>
      </div>
      <p className='m-4 text-center'>Mensagem do desconto</p>
    </div>
  );
}

export default HomePage;
