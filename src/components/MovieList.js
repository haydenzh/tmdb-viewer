import React from 'react';

import MovieCard from './MovieCard';

const MovieList = (prop) => {
  const movies = [
    {id:1,title:'Parasite',release_date:'12 Dec 2019'},
    {id:2,title:'Paradise',release_date:'12 Nov 2015'}
  ];
  if(!movies.length){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{'Popular Movies'}</h2>
      <div className="flex-container">
      {movies.map(m => <MovieCard movie={m} key={m.id} className={'movie-card'}/>)}
    </div>
    </div>
  );
};

export default MovieList;