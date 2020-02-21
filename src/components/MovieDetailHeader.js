import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import config from '../config/config';

import { getPercentagePopularity,getFullYearFromDateString, getHourStringFromMinute} from '../util/helpers';

const MovieDetailHeader = ({movie}) => {
  const {title,release_date,backdrop_path,poster_path,runtime,popularity} = movie;
  const bkgImg = `${config.IMAGE_BASE_URL}original${backdrop_path}`;
  const posterImg = `${config.IMAGE_BASE_URL}original${poster_path}`;
  const briefInfo = `${getFullYearFromDateString(release_date)} . ${getPercentagePopularity(popularity)} User Score`
  return (
    <>
     <Link to="/">
        <i className="fa fa-arrow-left btn-back-to-home"></i>
     </Link>
     <div className="movie-background-image">
       <img src={bkgImg} alt="post"/>
     </div>
     <div className="movie-detail-info">
        <div className="movie-detail-poster">
          <Card img={posterImg}/>
        </div>
        <div className="movie-brief-info">
          <Card title={title}>
            <div className="movie-brief-info-child">{briefInfo}</div>
            <div className="movie-brief-info-child">{getHourStringFromMinute(runtime)}</div>
          </Card>
        </div>
     </div>
    </>
  );
};

export default MovieDetailHeader;