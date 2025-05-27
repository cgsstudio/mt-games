import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { checkAuthToken } from '../utils/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  userData: any;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
  updateUserData: (data: any) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    credits: 0,
    bits: 0,
    availableForWithdrawal: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        try {
          // Set default authorization header for all requests
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          
          const response = await axios.get('https://celebrated-renewal-6d29b741df.strapiapp.com/api/users/me');
          
          if (response.data) {
            setIsAuthenticated(true);
            setUserData({
              username: response.data.username || "User",
              email: response.data.email,
              credits: 10000,
              bits: 10000,
              availableForWithdrawal: 0
            });
          }
        } catch (error) {
          console.error('Auth verification error:', error);
          localStorage.removeItem('jwt');
          delete axios.defaults.headers.common['Authorization'];
          setIsAuthenticated(false);
        }
      }
      setIsLoading(false);
    };

    verifyToken();
  }, []);

  const updateUserData = (data: any) => {
    setUserData(data);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    delete axios.defaults.headers.common['Authorization'];
    setIsAuthenticated(false);
    setUserData({
      username: "",
      email: "",
      credits: 0,
      bits: 0,
      availableForWithdrawal: 0
    });
    navigate('/');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      userData, 
      setIsAuthenticated, 
      logout,
      updateUserData 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
