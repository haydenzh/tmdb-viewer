import { useEffect,useState } from 'react';
import tmdb from '../apis/imdb';
 
export default (id) => {
  const [ state,setState ] = useState({ movie:null,loading:true,error:'' });

  useEffect(() => {
    if(id){
      setState({ movie:null,loading:true,error:'' })
      tmdb.get(`/movie/${id}`)
      .then(response => {
        setState({ movie:response.data,loading:false,error:'' });
      })
    .catch(error => { 
        if(error){
          const errorMsg = error.response ? error.response.data.status_message : error.message;
          setState({ movie:null,loading:false,error:errorMsg });
        }
      }); 
    }
  },[id]);

  return state;
}