import React from 'react';
import Header from './Header';
import MovieList from './MovieList';

const Home = (prop) => {
  return (
    <div>
      <Header />
      <MovieList />
    </div>
  );
};

export default Home;