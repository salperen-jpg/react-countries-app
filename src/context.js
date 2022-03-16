import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

const API_ENDPOINT = 'https://restcountries.com/v3.1';

const CountryContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  const fetchCountries = async (url) => {
    setIsError({ show: false, msg: '' });
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === 404) {
        console.log(1);
        setIsError({ show: true, msg: data.msg });
        setIsLoading(false);
      } else {
        setCountries(data);
        console.log(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchCountries(`https://restcountries.com/v2/name/${query}`);
    } else if (region) {
      fetchCountries(`https://restcountries.com/v2/region/${region}`);
    } else {
      fetchCountries(`${API_ENDPOINT}/all`);
    }
  }, [query, region]);

  const handleDropDown = (value) => {
    setRegion(value);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        isLoading,
        isError,
        query,
        setQuery,
        region,
        handleDropDown,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return useContext(CountryContext);
};
