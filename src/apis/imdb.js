import axios from 'axios';
import config from '../config/config';

export default axios.create({
  baseURL:config.BASE_URL,
  params:{
    api_key:config.API_KEY
  }
});
