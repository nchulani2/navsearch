import axios from 'axios';

const apiConfig = {
  API_KEY: process.env.REACT_APP_ACCESS_KEY
};

// creates an instance of the axios endpoint
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${apiConfig.API_KEY}`
  }
});
