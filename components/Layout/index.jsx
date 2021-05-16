import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='mx-auto container text-center p-4'>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
