import React from 'react';

import '../css/header.css';

import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header">
      <div className="logo"><img src="/logo.svg" alt=""/></div>
      <div className="search-bar">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;