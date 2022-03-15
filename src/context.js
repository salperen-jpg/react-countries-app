import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

const API_ENDPOINT = 'https://restcountries.com/v3.1';

const CountryContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const [query, setQuery] = useState('');

  const fetchCountries = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query) {
      fetchCountries(`https://restcountries.com/v2/name/${query}`);
    } else {
      fetchCountries(`${API_ENDPOINT}/all`);
    }
  }, [query]);

  return (
    <CountryContext.Provider
      value={{ countries, isLoading, isError, query, setQuery }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return useContext(CountryContext);
};
