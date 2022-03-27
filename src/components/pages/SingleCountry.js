import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/singleCountry.scss';
import useFetch from '../useFetch';

const SingleCountry = () => {
  const { capital } = useParams();

  const {
    countries: country,
    isLoading,
    isError,
  } = useFetch(`capital/${capital}`);

  console.log(country);

  if (isLoading) {
    return (
      <div className='loading-container'>
        <div className='loading'></div>
      </div>
    );
  }
  if (isError) {
    return <div>error</div>;
  }
  console.log(country);
  const {
    name: countryName,
    population,
    nativeName,
    topLevelDomain,
    region,
    borders,
    img,
    languages,
    currencies,
    subregion,
    capital: capitalOfCountry,
  } = country;

  return (
    <article className='single-country'>
      <Link to='/' className='btn single-btn'>
        Back
      </Link>
      <div className='single-country-center'>
        <img src={img} alt={countryName} />
        <div className='single-country-info'>
          <h3>{countryName}</h3>
          <div className='single-country-info-properties'>
            <div className='left'>
              <p>
                <span className='property'>Native Name : </span>
                <span>{nativeName}</span>
              </p>
              <p>
                <span className='property'>Population : </span>
                <span>{population}</span>
              </p>
              <p>
                <span className='property'>Region : </span>
                <span>{region}</span>
              </p>
              <p>
                <span className='property'>Sub Region : </span>
                <span>{subregion}</span>
              </p>
              <p>
                <span className='property'>Capital : </span>
                <span> {capitalOfCountry}</span>
              </p>
            </div>
            <div className='right'>
              <p>
                <span className='property'>Top Level Domain : </span>
                <span>{topLevelDomain}</span>
              </p>
              <p>
                <span className='property'>Currencies : </span>
                <span>
                  {currencies.map((currency, index) => {
                    return <span key={index}>{currency.code}</span>;
                  })}
                </span>
              </p>
              <p>
                <span className='property'>Languages : </span>
                <span>
                  {languages.map((lan, index) => {
                    return (
                      <span className='language' key={index}>
                        {lan.name}
                      </span>
                    );
                  })}
                </span>
              </p>
            </div>
          </div>
          <div className='border-countries'>
            <span className='property'>Border Countries : </span>
            <div className='borders'>
              {borders?.map((border, index) => {
                return (
                  <span className='single-border' key={index}>
                    {border}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCountry;
