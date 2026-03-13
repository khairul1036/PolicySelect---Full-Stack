import React, { useState } from 'react';

const PasswordReset = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally:
        // 1. Validate phone number
        // 2. Send reset request to backend (SMS/email link)
        console.log('Password reset requested for:', phoneNumber);

        // Example: show success message or redirect
        // alert('A reset link has been sent to your phone!');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {/* Main card */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden px-6 py-10 md:px-10 md:py-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-[#442364] text-3xl md:text-4xl font-bold mb-3">
                            Reset Your Password
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Enter the phone number linked to your PolicySelect account
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Phone Number Field */}
                        <div className="relative">
                            <input
                                id="phone-number"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => {
                                    // Only allow digits, limit length (e.g. 15 digits max)
                                    const val = e.target.value.replace(/\D/g, '').slice(0, 15);
                                    setPhoneNumber(val);
                                }}
                                placeholder=" "
                                className={`
                  peer w-full h-16 px-5 pt-6 pb-2 
                  border border-gray-300 rounded-lg 
                  text-xl text-gray-900 
                  placeholder:text-transparent 
                  focus:border-[#8F49AA] focus:ring-1 focus:ring-[#8F49AA]/50 
                  outline-none transition-all
                `}
                            />
                            <label
                                htmlFor="phone-number"
                                className={`
                  absolute left-5 font-semibold text-gray-500 pointer-events-none transition-all duration-200
                  ${phoneNumber ? 'top-2 text-xs' : 'top-4 text-sm'}
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                `}
                            >
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`
                w-full py-4 px-6 rounded-lg font-bold text-xl
                bg-[#8F49AA] text-white
                hover:bg-[#7a3e8f] active:bg-[#6a357d]
                transition-colors duration-200 shadow-sm hover:shadow
                mt-2
              `}
                        >
                            Reset Password
                        </button>
                    </form>

                    {/* Optional back to login link */}
                    <div className="mt-8 text-center">
                        <a
                            href="/sign-in"
                            className="text-[#8F49AA] font-medium hover:underline"
                        >
                            Back to Log In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;