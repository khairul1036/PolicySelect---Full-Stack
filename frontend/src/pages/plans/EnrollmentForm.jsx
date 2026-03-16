import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, User } from 'lucide-react';

const EnrollmentForm = ({ planName = "UHC Dual Complete NY-S002", onSubmit }) => {
  const location = useLocation();
  const displayPlanName = location.state?.planName || planName;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Minimum character limit not reached';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Minimum character limit not reached';
    }
    if (formData.phone && !/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter phone number.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      if (onSubmit) {
        onSubmit(formData);
      }
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          zipCode: '',
        });
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        {/* Header Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#8F49AA]/10 p-3 rounded-lg">
            <User className="w-8 h-8 text-[#8F49AA]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">
          Add Your Personal Information
        </h1>
        <p className="text-gray-600 text-center mb-2">
          GoHealth will use the information provided below to verify your identity when speaking with our licensed insurance agents by phone.
        </p>
        <p className="text-sm text-[#8F49AA] text-center mb-8 font-medium">
          Plan: {displayPlanName}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none transition ${
                errors.firstName
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-[#8F49AA]'
              }`}
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none transition ${
                errors.lastName
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-[#8F49AA]'
              }`}
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="user@domain.com"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#8F49AA] transition"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none transition ${
                errors.phone
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 focus:border-[#8F49AA]'
              }`}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth <span className="text-gray-400 text-xs">(Optional)</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              placeholder="mm/dd/yyyy"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#8F49AA] transition"
            />
          </div>

          {/* ZIP Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="12121"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#8F49AA] transition"
            />
          </div>

          {/* Expandable Info Section */}
          <div className="border-t pt-6 mt-6">
            <button
              type="button"
              onClick={() => setExpandedInfo(!expandedInfo)}
              className="flex items-center w-full text-blue-600 hover:text-blue-700 font-medium mb-4"
            >
              <span className="text-blue-600 mr-2">ℹ</span>
              Why is my info already here?
              {expandedInfo ? (
                <ChevronUp className="w-5 h-5 ml-auto" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-auto" />
              )}
            </button>

            {expandedInfo && (
              <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600 space-y-3">
                <p>
                  GoHealth may share this information with plans that are insured or covered by a Medicare Advantage (HMO, PPO), and PFFS organization with a Medicare contract and/or a Medicare-approved Part D sponsor.
                </p>
                <p>
                  Please enter your information to have a licensed insurance agent contact you regarding Medicare Advantage and/or Prescription Drug Plans.
                </p>
                <p>
                  By clicking the button, you consent to be contacted by a licensed insurance agent at GoHealth or GoHealth services about Medicare Advantage, Medicare Supplement Insurance Plans, Stand-Alone Prescription Drug plans, and other related services via automatic telephone dialing system, AI-generative voice, artificial voice and/or pre-recorded message, or text message at the telephone number you provided.
                </p>
                <p>
                  Consent is not a condition of purchase, and you may continue to receive insurance quotes if you say no.
                </p>
                <p>
                  GoHealth does not charge for sending or receiving text messages. Your carrier's message and data rates may apply. By using this form, you agree to the terms of our{' '}
                  <a href="#" className="text-[#8F49AA] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full bg-[#8F49AA] hover:bg-[#7a3e8f] disabled:bg-green-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200 mt-8"
          >
            {submitted ? 'Form Submitted Successfully!' : 'Submit And Call'}
          </button>
          {!submitted && (
            <p className="text-center text-xs text-gray-500">
              I Consent To The Terms Of This Form
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
