import React,{ useContext } from 'react';

import '../css/movieList.css';

import MovieCard from './MovieCard';
import Spinner from './Spinner';
import ErrorPage from './ErrorPage';

import context from '../contexts/tmdbContext';
import useFetch from '../hooks/useFetch';

const MovieList = (props) => {
  const {state} = useContext(context);
  const { movies,isLoading,term,error } = state;

  useFetch(term);

  if(error){
    return <ErrorPage error={error}/>
  }

  if(isLoading){
    return <Spinner />
  }

  if(!movies.length && !isLoading){
    return <ErrorPage error={'No matched movies found.'}/>
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

export default React.memo(MovieList);