import React from 'react';
import './NavTab.css';

function NavTab(props) {
  return (
    <section className='navtab'>
      <a className='navtab__link' href='#about'>
        <button className='navtab__btn'>
          <p className="navtab__text">О проекте</p>
        </button>
      </a>
      <a className='navtab__link' href=''>
        <button className='navtab__btn'>
          <p className="navtab__text">Технологии</p>
        </button>
      </a>
      <a className='navtab__link' href=''>
        <button className='navtab__btn'>
          <p className="navtab__text">Студент</p>
        </button>
      </a>
    </section>
  );
}

export default NavTab;