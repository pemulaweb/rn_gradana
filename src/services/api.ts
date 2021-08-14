import axios from 'axios';
import config from '../config';

const {baseUrl, wilayahUrl} = config;

// Get Random Jokes
export const apiGetRandomJokes = async () => {
  const url = `${baseUrl}/random_ten`;
  return await axios.get(url);
};

// Province
export const apiGetProvince = async () => {
  const url = `${wilayahUrl}/provinces.json`;
  return await axios.get(url);
};

// Regencies
export const apiGetRegencies = async (id: number) => {
  const url = `${wilayahUrl}/regencies/${id}.json`;
  return await axios.get(url);
};

// Districts
export const apiGetDistricts = async (id: number) => {
  const url = `${wilayahUrl}/districts/${id}.json`;
  return await axios.get(url);
};
