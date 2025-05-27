import React, { useState } from 'react';
import api from '../utils/axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLoginPopup } from '../context/LoginPopupContext';

interface LoginPopupProps {
  onClose: () => void;
  onLoginSuccess: (userData: any) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, onLoginSuccess }) => {
  const { setIsAuthenticated, updateUserData } = useAuth();
  const navigate = useNavigate();
  const { intendedRoute } = useLoginPopup();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await api.post('/auth/local', {
        identifier: loginData.email,
        password: loginData.password,
      });

      const token = res.data.jwt;
      localStorage.setItem('jwt', token);

      const userData = {
        username: res.data.user.username,
        email: res.data.user.email,
        credits: 10000,
        bits: 10000,
        availableForWithdrawal: 0,
      };

      updateUserData(userData);
      setIsAuthenticated(true);
      onLoginSuccess(userData);

      alert('Login successful!');

      if (intendedRoute) {
        navigate(intendedRoute);
      }
      onClose();
    } catch (err: any) {
      const errorMessage = err.response?.data?.error?.message || 'Login failed';
      console.error('❌ Error:', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#161f29] p-8 rounded-lg w-96">
        <h1 className="text-white text-2xl mb-6 orbitron-semibold">Login</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#050d19] p-3 rounded-[3px] text-[#9d9a9a] focus:outline-none orbitron-semibold text-base placeholder-[#9d9a9a]"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#050d19] p-3 rounded-[3px] text-[#9d9a9a] focus:outline-none orbitron-semibold text-base placeholder-[#9d9a9a]"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#194272] border-2 border-[#38638b] text-white px-4 py-2 rounded-[7px] uppercase barlow-bold text-base"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="linear-button px-4 py-2 orbitron-semibold text-base"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
