import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt');
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axios;
