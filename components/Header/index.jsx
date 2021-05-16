import React from 'react';
import styles from './headerStyles.module.css';

import NavigationMenu from '../Navigation';

function Header() {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <img
            src='/logo_palpitebox.png'
            alt='Palpitebox'
            className='mx-auto w-24'
          />
        </div>
      </div>
      <NavigationMenu />
    </React.Fragment>
  );
}

export default Header;
