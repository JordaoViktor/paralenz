import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.swapi.tech/api/',
});

export {api};
