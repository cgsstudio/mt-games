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

        <div className="border-b-[2px] border-[#d540f3] mx-4 md:mx-0 md:px-0 py-3 md:py-8">
          <div className="flex items-center gap-3">
            <h1 className="font-mono orbitron-semibold tracking-wider text-[25px] md:text-[33px]">UPDATE PROFILE</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto p-4">
        <div className="w-full bg-[#000000] text-white py-10 relative px-6 md:px-0">
          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-[#161f29] flex items-center justify-center overflow-hidden">
                  <img
                    src={profileImage || defaultProfile}
                    alt="Profile"
                    className="w-[90%] h-[90%] object-cover"
                  />
                </div>
                <div className='flex justify-end'>
                  <button
                    onClick={openModal}
                    className=" "
                  >
                    <img src={customPencil} alt="Edit" className="w-full h-full" />
                  </button>

                </div>

              </div>
            </div>

            {/* Form Section */}
            <form className="w-full space-y-4">
              <div>
                <label className="block text-xs uppercase mb-1 text-[#758695] barlow-condensed-semibold">USER NAME:</label>
                <input
                  type="text"
                  name="username"
                  value={profileData.username}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#161f29] rounded-[6px] border border-[#283643] text-white focus:outline-none focus:border-[#d540f3] orbitron-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1 text-[#758695] barlow-condensed-semibold">EMAIL:</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#161f29] rounded-[6px] border border-[#283643] text-white focus:outline-none focus:border-[#d540f3] orbitron-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1 text-[#758695] barlow-condensed-semibold">CONFIRM EMAIL:</label>
                <input
                  type="email"
                  name="confirmEmail"
                  value={profileData.confirmEmail}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#161f29] rounded-[6px] border border-[#283643] text-white focus:outline-none focus:border-[#d540f3] orbitron-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1 text-[#758695] barlow-condensed-semibold">NEW PASSWORD:</label>
                <input
                  type="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#161f29] rounded-[6px] border border-[#283643] text-white focus:outline-none focus:border-[#d540f3] orbitron-semibold"
                />
              </div>

              <div>
                <label className="block text-xs uppercase mb-1 text-[#758695] barlow-condensed-semibold">CONFIRM PASSWORD:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#161f29] rounded-[6px] border border-[#283643] text-white focus:outline-none focus:border-[#d540f3] orbitron-semibold "
                />
              </div>

              <div className="pt-6 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#194272] border border-[#38638b] text-white py-3 px-4 rounded-[7px] orbitron-medium hover:bg-[#172A3A] transition-colors w-auto md:w-auto md:px-12"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
              <div className="bg-[#050d19] border border-[#283643] p-6 rounded-[12px] w-80">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[#fff0c9] font-medium orbitron-medium">UPLOAD PFP</h3>
                  <button onClick={closeModal} className="text-[#758695] hover:text-white">
                    <X size={20} />
                  </button>
                </div>

                <div
                  className="border border-dashed border-[#283643] bg-[#161f29] rounded-none md:rounded-[6px] h-[250px] mb-4 flex flex-col items-center justify-center cursor-pointer"
                  onClick={() => document.getElementById('fileInput').click()}
                >
                  {tempSelectedImage ? (
                    <img
                      src={tempSelectedImage}
                      alt="Preview"
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  ) : (
                    <p className="text-[#758695] text-sm text-center barlow-condensed-regular">Select an image to upload</p>
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
            ${tempSelectedImage ? 'bg-[#194272] border border-[#38638b] hover:bg-[#172A3A]' : 'bg-[#232323] border border-[#3b3b3b] cursor-not-allowed text-[#3b3b3b]'}
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