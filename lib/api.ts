import axios from 'axios';

export const nextServer = axios.create({
  baseURL: '',
  withCredentials: true,
});

export const directServer = axios.create({
  baseURL: 'https://tasteorama-server.onrender.com',
});
