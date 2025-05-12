import React, { useState } from 'react';
import { X } from 'lucide-react';
import shapedivider from '../../image/icons/BG-55.svg';
import mobileshapedivider from '../../image/icons/BG-contest.svg';
import defaultProfile from '../../image/icons/defaultprofile.svg'; // <-- Default profile image
import customPencil from '../../image/icons/pencil.svg'; // <-- Custom pencil icon

import UserProfileMobile from '../UserProfileMobile';

export default function UpdateProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    username: 'User Name',
    email: 'email@email.com',
    confirmEmail: 'email@email.com',
    password: '••••••••••••••',
    confirmPassword: '••••••••••••••'
  });
  const [profileImage, setProfileImage] = useState(null);
  const [tempSelectedImage, setTempSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        // Store the image temporarily, don't set it as profile image yet
        setTempSelectedImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {
    // Only set the profile image when the save button is clicked
    if (tempSelectedImage) {
      setProfileImage(tempSelectedImage);
      setTempSelectedImage(null);
      closeModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    // Reset temp image when modal opens
    setTempSelectedImage(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTempSelectedImage(null);
  };

  return (
    <div className="w-full bg-[#000000] text-white py-10 md:py-16 relative">
      {/* Shape Divider */}
      <div className="absolute top-0 md:-top-10 left-0 w-full">
        <img src={shapedivider} alt="shape divider" className="hidden md:block w-full h-auto" />
        <img src={mobileshapedivider} alt="shape divider mobile" className="block md:hidden w-full h-auto" />
      </div>

      {/* Header */}
      <div className='2xl:max-w-6xl xl:max-w-5xl mx-auto'>
        <div className='block md:hidden mt-4 px-6'>
          <UserProfileMobile />
        </div>

        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 pt-3 pb-2 md:pt-8 md:pb-4">
          <div className="flex items-center gap-3">
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">UPDATE PROFILE</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="w-full bg-[#000000] text-white py-8 relative px-6 md:px-0">
          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Profile Image Section */}
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
                  <button
                    onClick={openModal}
                    className="w-8 h-8"
                  >
                    <img src={customPencil} alt="Edit" className="w-full h-full" />
                  </button>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <form className="w-full space-y-4">
              <div>
                <label className="block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">USER NAME:</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleInputChange}
                  className="w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none"
                />
              </div>

              <div>
                <label className="block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none"
                />
              </div>

              <div>
                <label className="block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">CONFIRM EMAIL:</label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={profileData.confirmEmail}
                  onChange={handleInputChange}
                  className="w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none"
                />
              </div>

              <div>
                <label className="block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">NEW PASSWORD:</label>
                <input
                  type="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none"
                />
              </div>

              <div>
                <label className="block text-[13px] uppercase mb-1 text-[#758695] barlow-bold">CONFIRM PASSWORD:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full py-3 px-6 bg-[#050d19] rounded-[6px] border-[2px] border-[#161f29] text-[#9d9a9a]/80 focus:outline-none focus:border-[#d540f3] orbitron-medium text-[20px] leading-none "
                />
              </div>

              <div className="pt-5 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#194272] border-[2px] border-[#38638b] text-lg text-white py-3 px-4 rounded-[7px] barlow-black  transition-colors w-auto md:w-auto md:px-12"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center  z-50">
              <div className="bg-[#161f29]  px-6 pt-4 pb-8 rounded-[12px] w-80 shadow-[0px_0px_9.62px_3.38px_rgba(0,0,0,0.75)]">
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
      </div>
    </div>
  );
}