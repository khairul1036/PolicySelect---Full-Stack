import React, { useState } from 'react';
import { FiCheckCircle, FiCircle, FiEye, FiEyeOff } from 'react-icons/fi';

const Register = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const passwordRules = [
        {
            id: 'length',
            label: 'At least 8 characters',
            test: (value) => value.length >= 8,
        },
        {
            id: 'uppercase',
            label: 'At least 1 upper case letter',
            test: (value) => /[A-Z]/.test(value),
        },
        {
            id: 'number',
            label: 'At least 1 number',
            test: (value) => /\d/.test(value),
        },
        {
            id: 'special',
            label: 'At least 1 special character',
            test: (value) => /[^A-Za-z0-9]/.test(value),
        },
    ];

    const passwordChecks = passwordRules.map((rule) => ({
        ...rule,
        valid: rule.test(password),
    }));

    const allPasswordValid = passwordChecks.every((rule) => rule.valid);
    const confirmPasswordValid = confirmPassword.length > 0 && confirmPassword === password;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!allPasswordValid || !confirmPasswordValid) {
            return;
        }
        // Add your registration logic here (validation, API call, etc.)
        console.log('Register attempt:', { phoneNumber, password, confirmPassword, email });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md">
                {/* Main card */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden px-6 py-10 md:px-10 md:py-12">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-[#442364] text-3xl md:text-4xl font-bold mb-2">
                            Create a new account
                        </h1>
                        <p className="text-gray-600 text-lg">
                            It's quick, easy and will save your plan matches for later!
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Phone Number */}
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

                        {/* Password Requirements */}
                        <div className="mb-2">
                            <p className="text-gray-900 text-xl font-bold italic mb-3">
                                Password Requirements
                            </p>
                            <ul className="ml-2 space-y-1.5 text-gray-700">
                                {passwordChecks.map((rule) => (
                                    <li key={rule.id} className="flex items-center gap-2">
                                        {rule.valid ? (
                                            <FiCheckCircle className="text-emerald-500" size={16} />
                                        ) : (
                                            <FiCircle className="text-gray-400" size={16} />
                                        )}
                                        <span className={rule.valid ? 'text-emerald-600' : 'text-gray-700'}>
                                            {rule.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Password */}
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

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#8F49AA]"
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                id="confirm-password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                                htmlFor="confirm-password"
                                className={`
                  absolute left-5 font-semibold text-gray-500 pointer-events-none transition-all duration-200
                  ${confirmPassword ? 'top-2 text-xs' : 'top-4 text-sm'}
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                `}
                            >
                                Confirm Password <span className="text-red-500">*</span>
                            </label>

                            <button
                                type="button"
                                onClick={toggleConfirmPasswordVisibility}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#8F49AA]"
                                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            >
                                {showConfirmPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
                            </button>
                        </div>
                        {confirmPassword.length > 0 && !confirmPasswordValid && (
                            <p className="-mt-2 text-sm text-red-500">Passwords do not match.</p>
                        )}

                        {/* Email (Optional) */}
                        <div className="relative">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                htmlFor="email"
                                className={`
                  absolute left-5 font-semibold text-gray-500 pointer-events-none transition-all duration-200
                  ${email ? 'top-2 text-xs' : 'top-4 text-sm'}
                  peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]
                `}
                            >
                                Email Address <span className="text-gray-500 font-light italic text-xs">(Optional)</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className={`
                w-full py-4 px-6 rounded-lg font-bold text-xl
                bg-[#8F49AA] text-white
                hover:bg-[#7a3e8f] active:bg-[#6a357d]
                transition-colors duration-200 shadow-sm hover:shadow mt-2
              `}
                        >
                            <div className="flex flex-col items-center">
                                <span>Continue</span>
                                <span className="text-xs font-normal mt-1 opacity-90">
                                    I Consent To The Terms Of This Form
                                </span>
                            </div>
                        </button>
                    </form>

                    {/* Already have account */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-700 font-semibold mb-2">
                            Already have an account?
                        </p>
                        <a
                            href="/sign-in"
                            className="text-[#8F49AA] font-bold hover:underline"
                        >
                            Log in to view your plans
                        </a>
                    </div>

                    {/* Consent message */}
                    <div className="mt-10 text-xs text-gray-600 leading-relaxed space-y-3">
                        <p>
                            <strong>
                                Please enter your information to have a licensed insurance agent contact you regarding Medicare Advantage and/or Prescription Drug Plans.
                            </strong>
                        </p>
                        <p>
                            <strong>
                                By clicking the button, you consent to be contacted by a licensed insurance agent at PolicySelect or PolicySelect services about Medicare Advantage, Medicare Supplement Insurance Plans, Stand-Alone Prescription Drug plans
                            </strong>, and other related services via automatic telephone dialing system, AI generative voice, artificial voice and/or pre-recorded message, or text message at the telephone number you provided.
                        </p>
                        <p>Consent is not a condition of purchase, and you may continue to receive insurance quotes if you say no.</p>
                        <p>
                            PolicySelect does not charge you for sending or receiving text messages. Your carrier's message and data rates may apply. By using this form, you agree to the terms of our{' '}
                            <a href="/privacy-policy" className="text-[#8F49AA] underline hover:text-[#7a3e8f]">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;