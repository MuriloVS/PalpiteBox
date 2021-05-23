import React from 'react';
import Head from 'next/head';

function PageTitle(props) {
  return (
    <div>
      <Head>
        <title>{props.title} - PalpiteBox</title>
      </Head>
    </div>
  );
}

export default PageTitle;
