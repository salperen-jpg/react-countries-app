import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import useFetch from './components/useFetch';

const API_ENDPOINT = 'https://restcountries.com/v3.1';

const CountryContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [term, setTerm] = useState('all');

  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    if (query) {
      setTerm(`name/${query}`);
    }
    if (region) {
      setTerm(`region/${region}`);
    }
  }, [query, region]);

  const { isLoading, isError, countries } = useFetch(term);

  const handleDropDown = (value) => {
    if (!value) {
      setTerm('all');
    }
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
