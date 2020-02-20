import React from 'react';

import '../css/movieDetail.css';

import useFetchById from '../hooks/useFetchById';
import ErrorPage from './ErrorPage';
import Spinner from './Spinner';
import Card from './Card';
import MovieDetailHeader from './MovieDetailHeader';

const MovieDetail = ({match}) => {
  const movieId = match.params.id;
  const { movie,loading,error } = useFetchById(movieId);
   
  if(loading){
    return <Spinner />;
  }

  if(error){
    return <ErrorPage />;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-header">
        <MovieDetailHeader movie={movie} />
      </div>
      <div className="movie-detail-overview">
        <Card title={'Overview'} className={'movie-overview-card'}>
          <div className="movie-detail-child">{movie.overview}</div>
        </Card>
      </div>
    </div>
  );
};

export default MovieDetail;