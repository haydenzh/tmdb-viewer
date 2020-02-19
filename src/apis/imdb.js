import axios from 'axios';

const API_KEY = '6ed12e064b90ae1290fa326ce9e790ff';

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

export default axios.create({
  baseURL:'https://api.themoviedb.org/3',
  params:{
    api_key:API_KEY
  }
});