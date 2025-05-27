import React, { useState } from 'react';
import { X } from 'lucide-react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import defaultProfile from '../../image/icons/defaultprofile.svg';
import customPencil from '../../image/icons/pencil.svg';
import UserProfileMobile from '../UserProfileMobile';

interface ProfileData {
  username: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

const inputStyles = {
  base: "w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none",
  label: "block text-[13px] uppercase mb-1 text-[#758695] barlow-bold"
};

const buttonStyles = {
  primary: "bg-[#194272] border-[2px] border-[#38638b] text-lg text-white py-3 px-4 rounded-[7px] barlow-black transition-colors",
  disabled: "bg-[#232323] border border-[#3b3b3b] cursor-not-allowed text-[#3b3b3b]"
};

export default function UpdateProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: ''
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [tempSelectedImage, setTempSelectedImage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        setTempSelectedImage(event.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    if (tempSelectedImage) {
      setProfileImage(tempSelectedImage);
      setTempSelectedImage(null);
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setTempSelectedImage(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTempSelectedImage(null);
  };

  const renderFormField = (label: string, name: keyof ProfileData, type: string = 'text', placeholder: string) => (
    <div>
      <label className={inputStyles.label}>{label}:</label>
      <input
        type={type}
        name={name}
        value={profileData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={inputStyles.base}
      />
    </div>
  );

  const renderProfileImage = () => (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-40 h-40 rounded-full bg-[#050d19] border-[2px] border-[#161f29] flex items-center justify-center overflow-hidden">
          <img
            src={profileImage || defaultProfile}
            alt="Profile"
            className="w-[90%] h-[90%] object-cover rounded-full"
          />
        </div>
        <div className='flex justify-end absolute bottom-0 -right-4'>
          <button onClick={openModal} className="w-8 h-8">
            <img src={customPencil} alt="Edit" className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
      <div className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </div>

      <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
        <div className='block md:hidden mt-4 px-6'>
          <UserProfileMobile />
        </div>

        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">
            UPDATE PROFILE
          </h1>
        </div>

        <div className="max-w-4xl mx-auto p-4">
          <div className="w-full bg-[#000000] text-white py-8 relative px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {renderProfileImage()}

              <form className="w-full space-y-4">
                {renderFormField('USER NAME', 'username', 'text', 'User Name')}
                {renderFormField('EMAIL', 'email', 'email', 'email@email.com')}
                {renderFormField('CONFIRM EMAIL', 'confirmEmail', 'email', 'Confirm email')}
                {renderFormField('NEW PASSWORD', 'password', 'password', '**************')}
                {renderFormField('CONFIRM PASSWORD', 'confirmPassword', 'password', '**************')}

                <div className="pt-5 flex justify-center">
                  <button type="submit" className={`${buttonStyles.primary} w-auto md:px-12`}>
                    SAVE CHANGES
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#161f29] px-6 pt-4 pb-8 rounded-[12px] w-80 shadow-[0px_0px_9.62px_3.38px_rgba(0,0,0,0.75)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#fff0c9] text-lg leading-[1.2] barlow-condensed-medium">UPLOAD PFP</h3>
              <button onClick={closeModal} className="text-[#758695] hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div
              className={`${
                tempSelectedImage ? 'border-none' : 'border border-dashed border-[#758695]'
              } bg-[#283643] rounded-none md:rounded-[6px] h-[250px] mb-4 flex flex-col items-center justify-center cursor-pointer overflow-hidden`}
              onClick={() => document.getElementById('fileInput').click()}
            >
              {tempSelectedImage ? (
                <img
                  src={tempSelectedImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <p className="text-[#fff0c9] text-base text-center barlow-semibold">Select an image to upload</p>
              )}
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSaveImage}
                disabled={!tempSelectedImage}
                className={`w-auto text-white text-base py-2 px-6 rounded-[7px] barlow-black transition-colors
                ${tempSelectedImage ? 'bg-[#194272] border border-[#38638b] ' : 'bg-[#232323] border border-[#3b3b3b] cursor-not-allowed text-[#3b3b3b]'}
              `}
              >
                SAVE
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}