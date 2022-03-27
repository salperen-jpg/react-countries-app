import React from 'react';
import { useCountryContext } from '../context';
import Country from './Country';
import './styles/countries.scss';
import Error from './Error';

const Countries = () => {
  const { countries, isLoading, isError } = useCountryContext();

  if (isError.show) {
    return (
      <div className='error-center'>
        <Error></Error>
      </div>
    );
  }

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
        {countries?.map((country, index) => {
          return <Country {...country} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Countries;
