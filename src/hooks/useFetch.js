import { useContext,useEffect } from 'react';

import tmdb from '../apis/imdb';
import TMDBContext from '../contexts/tmdbContext';
 
export default (term) => {
  let context = useContext(TMDBContext);
    useEffect(() => {
      if(!term){
          tmdb.get('/movie/popular')
          .then(response => {
            context.setMovies(response.data.results);
            context.setError(null);
          })
        .catch(error => { 
            const errorMsg = error.response ? error.response.data.status_message : error.message;
            context.setError(errorMsg)
          }); 
      } else {
        tmdb.get('/search/movie',{
          params:{
            query:term
           }
        })
        .then(response => {
          context.setMovies(response.data.results);
          context.setError(null);
        })
        .catch(error => { 
          const errorMsg = error.response ? error.response.data.status_message : error.message;
          context.setError(errorMsg);
        });
      }
    },[term]);
};