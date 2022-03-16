import React from 'react';
import './styles/country.scss';
import { Link } from 'react-router-dom';
import { SingleCountry } from './pages';

const Country = ({ name, population, region, capital, flags: { png } }) => {
  return (
    <section className='country'>
      <Link to={`/countries/${capital}`}>
        <img src={png} alt={name} />
        <div className='country-info'>
          <h4>{name.common || name}</h4>
          <div className='country-flex'>
            <div>
              <span className='property'>Population : </span>
              <span className='other'>{population}</span>
            </div>
            <div>
              <span className='property'>Region : </span>
              <span className='other'>{region}</span>
            </div>
            <div>
              <span className='property'>Capital : </span>
              <span className='other'>{capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Country;
