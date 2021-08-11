import axios from 'axios';
import config from '../config';

const {baseUrl} = config;

// Get Random Jokes
export const apiGetRandomJokes = async () => {
  const url = `${baseUrl}/random_ten`;
  return await axios.get(url);
};
