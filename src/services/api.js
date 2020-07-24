import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.2.2:3000/',
  baseURL: 'https://5f17a59e7c06c900160dc258.mockapi.io/api/',
});

export default api;
