import React from 'react';
import { useCountryContext } from '../context';
import Country from './Country';
import './styles/countries.scss';
const Countries = () => {
  const { countries, isLoading } = useCountryContext();

  if (isLoading) {
    return (
      <div className='loading-container'>
        <div className='loading'></div>
      </div>
    );
  }
  return (
    <section className='countries'>
      <div className='countries-center'>
        {countries.map((country) => {
          return <Country {...country} key={country.name.common} />;
        })}
      </div>
    </section>
  );
};

export default Countries;
