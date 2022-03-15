import React from 'react';
import { MdOutlineDarkMode } from 'react-icons/md';
import '../components/styles/navbar.scss';

const navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <h3>Where in the world ?</h3>
        <button className='btn nav-btn'>{<MdOutlineDarkMode />}</button>
      </div>
    </nav>
  );
};

export default navbar;
