import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('best_match');

  const getSortByClass = (sortByOptionValue) => {
    if (sortByOptionValue === sort) {
      return 'active';
    }
    return '';
  };

  const sortOptionHandler = (sortByOptionValue) => {
    setSort(sortByOptionValue);
  };

  const termChangeHandler = (e) => {
    setTerm(e.target.value);
  };

  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    searchYelp(term, location, sort);
    console.log(`Searching Yelp with ${term}, ${location}, ${sort}`);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => sortOptionHandler(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className='SearchBar'>
      <div className='SearchBar-sort-options'>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className='SearchBar-fields'>
        <input placeholder='Search Businesses' onChange={termChangeHandler} />
        <input placeholder='Where?' onChange={locationChangeHandler} />
      </div>
      <div className='SearchBar-submit' onClick={searchHandler}>
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
