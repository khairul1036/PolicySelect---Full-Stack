import React, { useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa6';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here (API call, validation, etc.)
        console.log('Login attempt:', { phoneNumber, password });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {/* Main card */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden px-6 py-10 md:px-10 md:py-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-[#442364] text-3xl md:text-4xl font-bold mb-2">
                            Log In
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Using your PolicySelect account
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

                        {/* Password Field */}
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                maxLength={256}
                                placeholder=" "
                                className={`
                  peer w-full h-16 px-5 pt-6 pb-2 pr-14
                  border border-gray-300 rounded-lg 
                  text-xl text-gray-900 
                  placeholder:text-transparent 
                  focus:border-[#8F49AA] focus:ring-1 focus:ring-[#8F49AA]/50 
                  outline-none transition-all
                `}
                            />
                            <label
                                htmlFor="password"
                                className={`
                  absolute left-5 font-semibold text-gray-500 pointer-events-none transition-all duration-200
                  ${password ? 'top-2 text-xs' : 'top-4 text-sm'}
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                `}
                            >
                                Password <span className="text-red-500">*</span>
                            </label>

                            {/* Toggle visibility button */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#8F49AA] focus:outline-none"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? (
                                    // Eye slash icon (hide)
                                   <FaEye className="text-gray-500 hover:text-[#8F49AA]" />
                                ) : (
                                    // Eye icon (show)
                                    <FaRegEyeSlash className="text-gray-500 hover:text-[#8F49AA]" />
                                )}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-center">
                            <a
                                href="/password-reset"
                                className="text-[#8F49AA] font-bold hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`
                w-full py-4 px-6 rounded-lg font-bold text-xl
                bg-[#8F49AA] text-white
                hover:bg-[#7a3e8f] active:bg-[#6a357d]
                transition-colors duration-200 shadow-sm hover:shadow
              `}
                        >
                            Log In
                        </button>
                    </form>

                    {/* Create Account Link */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-700 font-semibold mb-2">
                            Don't have an account?
                        </p>
                        <a
                            href="/sign-up"
                            className="text-[#8F49AA] font-bold hover:underline"
                        >
                            Create one here
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;