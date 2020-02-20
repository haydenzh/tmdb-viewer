import React,{ useContext } from 'react';

import '../css/movieList.css';

import MovieCard from './MovieCard';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

import context from '../contexts/tmdbContext';

const MovieList = (prop) => {
  const {movies,term,error} = useContext(context);
  if(error){
    return <ErrorPage error={error}/>
  }

  if(!movies.length){
    return <Spinner />
  }

  return (
    <div className="movie-list">
      <div className="movie-title">
        <h2>{term ? 'Movie/Search Result' : 'Popular Movies'}</h2>
      </div>
      <div className="movie-card-container">
        {movies.map(m => <MovieCard movie={m} key={m.id} className={'movie-card'}/>)}
    </div>
    </div>
  );
};

export default MovieList;