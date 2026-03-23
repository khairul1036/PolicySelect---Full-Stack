import React, { useState } from 'react';
import { FiChevronLeft, FiSave, FiLock } from 'react-icons/fi';

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '(831) 842-8751', // pre-filled & disabled
    dob: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send data to backend
    console.log('Saving personal info:', formData);
    // Show success toast / redirect, etc.
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-12">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[#442364] hover:text-[#8F49AA] transition-colors"
          >
            <FiChevronLeft size={28} />
            <span className="text-xl font-medium">Back</span>
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-[#442364] text-center flex-1">
            Personal Info
          </h1>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-10">
            <p className="text-gray-600 text-lg mb-8 text-center md:text-left">
              Update your information to get more accurate plan recommendations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* First Name */}
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 border border-gray-300 rounded-lg 
                    text-xl text-gray-900 bg-gray-50 
                    focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 
                    outline-none transition-all
                  `}
                />
                <label
                  htmlFor="firstName"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none transition-all duration-200
                    ${formData.firstName ? 'top-2 text-xs' : 'top-4 text-base'}
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                  `}
                >
                  First Name <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 border border-gray-300 rounded-lg 
                    text-xl text-gray-900 bg-gray-50 
                    focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 
                    outline-none transition-all
                  `}
                />
                <label
                  htmlFor="lastName"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none transition-all duration-200
                    ${formData.lastName ? 'top-2 text-xs' : 'top-4 text-base'}
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                  `}
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 border border-gray-300 rounded-lg 
                    text-xl text-gray-900 bg-gray-50 
                    focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 
                    outline-none transition-all
                  `}
                />
                <label
                  htmlFor="email"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none transition-all duration-200
                    ${formData.email ? 'top-2 text-xs' : 'top-4 text-base'}
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                  `}
                >
                  Email Address
                </label>
              </div>

              {/* Phone Number (Disabled) */}
              <div className="relative">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  disabled
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 pr-14 border border-gray-300 rounded-lg 
                    text-xl text-gray-600 bg-gray-100 cursor-not-allowed
                  `}
                />
                <label
                  htmlFor="phoneNumber"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none
                    top-2 text-xs
                  `}
                >
                  Phone Number <span className="text-gray-400">(Verified)</span>
                </label>
                <div className="absolute right-5 top-5 text-gray-500">
                  <FiLock />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="relative">
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  max="2026-03-22"
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 border border-gray-300 rounded-lg 
                    text-xl text-gray-900 bg-gray-50 
                    focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 
                    outline-none transition-all
                  `}
                />
                <label
                  htmlFor="dob"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none transition-all duration-200
                    ${formData.dob ? 'top-2 text-xs' : 'top-4 text-base'}
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                  `}
                >
                  Date of Birth <span className="text-red-500">*</span>
                </label>
              </div>

              {/* ZIP Code */}
              <div className="relative">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  maxLength={5}
                  inputMode="numeric"
                  placeholder=" "
                  className={`
                    peer w-full h-16 px-5 pt-6 pb-2 border border-gray-300 rounded-lg 
                    text-xl text-gray-900 bg-gray-50 
                    focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 
                    outline-none transition-all
                  `}
                />
                <label
                  htmlFor="zip"
                  className={`
                    absolute left-5 font-medium text-gray-500 pointer-events-none transition-all duration-200
                    ${formData.zip ? 'top-2 text-xs' : 'top-4 text-base'}
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                  `}
                >
                  ZIP Code <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="
                    flex-1 py-4 px-6 border-2 border-gray-300 text-gray-700 font-bold text-lg 
                    rounded-xl hover:bg-gray-50 transition-colors
                  "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
                    flex-1 py-4 px-6 bg-[#8F49AA] hover:bg-[#7a3e8f] active:bg-[#6a357d] 
                    text-white font-bold text-lg rounded-xl shadow-md 
                    transition-all transform hover:scale-105 active:scale-100
                  "
                >
                  <div className="flex items-center justify-center gap-2">
                    <FiSave />
                    Save Updates
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:hidden z-50">
        <div className="flex gap-4 max-w-3xl mx-auto">
          <button
            onClick={() => window.history.back()}
            className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-4 bg-[#8F49AA] text-white font-bold rounded-xl hover:bg-[#7a3e8f] transition-colors"
          >
            Save Updates
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;