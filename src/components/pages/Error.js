import React from 'react';
import error from '../assets/error.svg';
import { Link } from 'react-router-dom';
import '../styles/errorPage.scss';

const Error = () => {
  return (
    <aside className='error-page'>
      <div className='container'>
        <img src={error} alt='error-img' />
        <Link to='/' className='btn error-btn'>
          Go home
        </Link>
      </div>
    </aside>
  );
};

export default Error;
