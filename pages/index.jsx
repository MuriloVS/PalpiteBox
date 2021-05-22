import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function HomePage() {
  const { data, error } = useSWR('/api/get-promo', fetcher);
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
      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className='m-4 text-center'>{data.message}</p>
      )}
    </div>
  );
}

export default HomePage;
