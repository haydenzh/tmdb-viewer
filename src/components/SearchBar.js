import React,{ useContext,useRef } from 'react';

import context from '../contexts/tmdbContext';

const SearchBar = () => {
  let {setState} = useContext(context);
  const inputEl = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setState(preState => ({...preState,term:inputEl.current.value }));
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