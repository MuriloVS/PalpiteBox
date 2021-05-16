import React from 'react';
import Link from 'next/link';

function NavigationMenu() {
  return (
    <div className='bg-gray-100 p-4 shadow-lg text-center'>
      <Link href='/'>
        <a className='px-2 hover:underline'>Home</a>
      </Link>
      <Link href='/sobre'>
        <a className='px-2 hover:underline'>Sobre</a>
      </Link>
      <Link href='/contato'>
        <a className='px-2 hover:underline'>Contato</a>
      </Link>
      <Link href='/pesquisa'>
        <a className='px-2 hover:underline'>Pesquisa</a>
      </Link>
    </div>
  );
}

export default NavigationMenu;
