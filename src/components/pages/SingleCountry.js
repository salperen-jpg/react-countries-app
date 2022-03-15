import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/singleCountry.scss';

const SingleCountry = () => {
  const { capital } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});
  const [isError, setIsError] = useState(false);

  const fetchCountry = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v2/capital/${capital}`
      );
      const data = await response.json();
      setCountry(data[0]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchCountry();
  }, []);

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

  const {
    name: countryName,
    population,
    nativeName,
    topLevelDomain,
    region,
    flag: img,
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
                <span>{capitalOfCountry}</span>
              </p>
            </div>
            <div className='right'>
              <p>
                <span className='property'>Top Level Domain : </span>
                <span>{topLevelDomain}</span>
              </p>
              <p>
                <span className='property'>Currencies : </span>
                <span>{}</span>
              </p>
              <p>
                <span className='property'>Languages : </span>
                <span>{}</span>
              </p>
            </div>
          </div>
          <div className='border-countries'>
            <span className='property'>Border Countries</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCountry;