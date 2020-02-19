import React from 'react';

const SearchBar = (prop) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;