import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';


const MovieCard = ({movie,className}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className={className} title={movie.title}>
        <div>{movie.release_date}</div> 
      </Card>
    </Link>
  );
};

export default MovieCard;