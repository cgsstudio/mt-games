import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLoginPopup } from '../context/LoginPopupContext';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { openLoginPopup } = useLoginPopup();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      openLoginPopup(location.pathname);
      navigate('/');
    }
  }, [isAuthenticated, navigate, location.pathname, openLoginPopup]);

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
