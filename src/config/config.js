const config_dev = {
  BASE_URL:'https://api.themoviedb.org/3',
  API_KEY: '6ed12e064b90ae1290fa326ce9e790ff',
  IMAGE_BASE_URL: 'http://image.tmdb.org/t/p/'
};

const config_prod = {
  BASE_URL:process.env.BASE_URL,
  API_KEY: process.env.API_KEY,
  IMAGE_BASE_URL: process.env.IMAGE_BASE_URL
};

export default process.env.NODE_ENV === 'production' ? config_prod : config_dev;