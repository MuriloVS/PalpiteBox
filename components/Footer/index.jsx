import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-500 p-4'>
      <div className='container mx-auto text-center text-white font-bold'>
        Projeto deselvolvido por: Murilo Vitória da Silva
        <a
          href='https://github.com/MuriloVS'
          target='_blank'
          className='px-1 hover:underline'
        >
          (Github)
        </a>
      </div>
      ;
    </div>
  );
}

export default Footer;
