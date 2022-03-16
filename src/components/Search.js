import React from 'react';
import './styles/search.scss';
import { useCountryContext } from '../context';

const Search = () => {
  const { query, setQuery, handleDropDown, region } = useCountryContext();
  return (
    <article className='search-form'>
      <form className='country-form' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          className='form-input'
          value={query}
          placeholder='Search countries'
          disabled={region}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />

        <select
          className='form-drop-down'
          value={region}
          disabled={query}
          onChange={(e) => handleDropDown(e.target.value)}
        >
          <option value='' name=''>
            Filter by region
          </option>
          <option value='Africa'>Africa</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
        </select>
      </form>
    </article>
  );
};

export default Search;
