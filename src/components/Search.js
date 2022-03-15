import React from 'react';
import './styles/search.scss';
import { useCountryContext } from '../context';

const Search = () => {
  const { query, setQuery } = useCountryContext();
  return (
    <article className='search-form'>
      <form className='country-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
    </article>
  );
};

export default Search;
