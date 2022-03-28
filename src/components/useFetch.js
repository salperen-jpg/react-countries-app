import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://restcountries.com/v2/';

const useFetch = (urlParams) => {
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: '' });

  const fetchCountries = async (url) => {
    setIsError({ show: false, msg: '' });
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 404 || data.message === 'Page Not Found') {
        setIsError({ show: true, msg: data.msg });
        setIsLoading(false);
      } else {
        setCountries(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let url = `${API_ENDPOINT}${urlParams}`;
    fetchCountries(url);
  }, [urlParams]);

  return { countries, isLoading, isError };
};

export default useFetch;
