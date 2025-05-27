import axios from 'axios';

const api = axios.create({
  baseURL: 'https://celebrated-renewal-6d29b741df.strapiapp.com/api'
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
