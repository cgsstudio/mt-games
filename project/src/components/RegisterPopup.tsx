import React, { useState } from 'react';
import axios from 'axios';

interface RegisterPopupProps {
  onClose: () => void;
  onRegisterSuccess: (userData: UserData) => void;
}

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

interface UserData {
  username: string;
  email: string;
  credits: number;
  bits: number;
  availableForWithdrawal: number;
}

const INITIAL_FORM_STATE: RegisterFormData = {
  username: '',
  email: '',
  password: '',
};

const FormInput: React.FC<{
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full bg-[#050d19] p-3 rounded-[3px] mb-4 text-[#9d9a9a] focus:outline-none orbitron-semibold text-xl placeholder-[#9d9a9a]"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required
  />
);

const RegisterPopup: React.FC<RegisterPopupProps> = ({ onClose, onRegisterSuccess }) => {
  const [registerData, setRegisterData] = useState<RegisterFormData>(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setRegisterData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post(
        'https://celebrated-renewal-6d29b741df.strapiapp.com/api/auth/local/register',
        registerData
      );

      localStorage.setItem('jwt', res.data.jwt);
      onRegisterSuccess({
        username: res.data.user.username,
        email: res.data.user.email,
        credits: 10000,
        bits: 10000,
        availableForWithdrawal: 0,
      });
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#161f29] p-8 rounded-lg w-96">
        <h2 className="text-white text-2xl mb-4 orbitron-semibold">Register</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            placeholder="Username"
            value={registerData.username}
            onChange={(value) => handleInputChange('username', value)}
          />
          <FormInput
            type="email"
            placeholder="Email"
            value={registerData.email}
            onChange={(value) => handleInputChange('email', value)}
          />
          <FormInput
            type="password"
            placeholder="Password"
            value={registerData.password}
            onChange={(value) => handleInputChange('password', value)}
          />

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#194272] border-[2px] border-[#38638b] uppercase text-white text-lg py-2 barlow-bold px-4 rounded-[7px]"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="linear-button px-4 py-2 orbitron-semibold"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPopup;
