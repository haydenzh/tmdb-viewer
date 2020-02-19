import React from 'react';

import '../css/header.css';

import SearchBar from './SearchBar';

const Header = (prop) => {
  return (
    <div className="header">
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;