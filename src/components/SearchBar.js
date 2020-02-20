import React,{ useContext,useRef } from 'react';

import context from '../contexts/tmdbContext';
import useFetch from '../hooks/useFetch';

const SearchBar = () => {
  let {term,setTerm} = useContext(context);

  const inputEl = useRef(null);

  useFetch(term);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTerm(inputEl.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputEl} type="text" placeholder="Search" />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;