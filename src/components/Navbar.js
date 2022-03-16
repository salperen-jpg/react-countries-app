import React, { useState, useEffect } from 'react';
import { MdOutlineDarkMode, MdOutlineWbSunny } from 'react-icons/md';
import '../components/styles/navbar.scss';

const Navbar = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <h3>Where in the world ?</h3>
        <button className='btn nav-btn' onClick={toggleTheme}>
          {theme === 'light-theme' ? (
            <MdOutlineDarkMode></MdOutlineDarkMode>
          ) : (
            <MdOutlineWbSunny></MdOutlineWbSunny>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
