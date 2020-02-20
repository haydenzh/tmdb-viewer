import React from 'react';
import { Link } from 'react-router-dom';

import '../css/movieCard.css';

import Card from './Card';
import Badge from './Badge';
import {IMAGE_BASE_URL} from '../apis/imdb';

const getBadgeBackGroundColor = (vote) =>{
  let bgColor = '#000';
  if(vote){
    if(vote >= 8){
      bgColor = '#01d277';
    } else if(vote < 8 && vote >= 6) {
      bgColor ='#4902a3';
    } else {
      bgColor = '#d1225b';
    }
  }
  return bgColor;
};

const releaseDateFormat = (date) => {
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  if(date){
    let d = new Date(date);
    const month = months[Number(d.getMonth())];
    const year = d.getFullYear();

    return `${month} ${year}`;
  }

  return 'Unknown';
};

const MovieCard = ({movie,className}) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className={className} title={movie.title} img={`${IMAGE_BASE_URL}original${movie.poster_path}`}>
        <div className="movie-card-child">{releaseDateFormat(movie.release_date)}</div>
        <Badge content={`${movie.vote_average * 10}%`} backGroundColor={getBadgeBackGroundColor(movie.vote_average)} top={'6px'} left={'10px'}/>
      </Card>
    </Link>
  );
};

export default MovieCard;