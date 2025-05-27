import api from './axios';

export const checkAuthToken = async () => {
  const token = localStorage.getItem('jwt');
  if (!token) return false;

  try {
    // Verify token with Strapi's users/me endpoint
    await api.get('/users/me');
    return true;
  } catch (error) {
    localStorage.removeItem('jwt');
    return false;
  }
};
