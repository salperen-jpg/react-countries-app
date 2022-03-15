import React from 'react';
import './styles/country.scss';
import { Link } from 'react-router-dom';
import { SingleCountry } from './pages';

const Country = ({
  name: { common },
  population,
  region,
  capital,
  flags: { png },
}) => {
  return (
    <section className='country'>
      <Link to={`/countries/${capital}`}>
        <img src={png} alt={common} />
        <div className='country-info'>
          <h4>{common}</h4>
          <div className='country-flex'>
            <div>
              <span className='property'>Population : </span>
              <span>{population}</span>
            </div>
            <div>
              <span className='property'>Region : </span>
              <span>{region}</span>
            </div>
            <div>
              <span className='property'>Capital :</span>
              <span>{capital}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Country;
