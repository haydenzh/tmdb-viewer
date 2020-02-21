import { useContext,useEffect } from 'react';

import tmdb from '../apis/imdb';
import TMDBContext from '../contexts/tmdbContext';
 
export default (term) => {
  let { setState } = useContext(TMDBContext);
    useEffect(() => {
      if(!term){
          tmdb.get('/movie/popular')
          .then(response => {
            setState(preState => ({ ...preState,isLoading:false,movies:response.data.results }));
          })
        .catch(error => { 
            const errorMsg = error.response ? error.response.data.status_message : error.message;
            setState(preState => ({ ...preState,isLoading:false,error:errorMsg }));
          }); 
      } else {
        tmdb.get('/search/movie',{
          params:{
            query:term
           }
        })
        .then(response => {
          setState(preState => ({ ...preState,isLoading:false,movies:response.data.results }));
        })
        .catch(error => { 
          const errorMsg = error.response ? error.response.data.status_message : error.message;
          setState(preState => ({ ...preState,isLoading:false,error:errorMsg }));
        });
      }
    },[term]);
};