import React, { useState } from 'react';
import Helmet from '../../components/helmet/Helmet';
import manOnPhone from '../../assets/image/man_phone.webp';
import { Link } from 'react-router';

const Home = () => {
    const [zipCode, setZipCode] = useState('');

    const handleZipChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 5);
        setZipCode(value);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            {/* SEO Meta Tags */}
            <Helmet
                title="PolicySelect | Compare Medicare Advantage Plans in Your Area"
                description="Easily compare 2026 Medicare Advantage plans available in your area. Enter your ZIP code to view and choose the best plan for your healthcare needs."
            />

            <div className="mx-auto max-w-3xl">
                {/* Main card */}
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                    <div className="flex flex-col">
                        {/* Hero image - always on top */}
                        <div className="w-full">
                            <img
                                src={manOnPhone}
                                alt="Person checking Medicare plans on phone"
                                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-top"
                            />
                        </div>

                        {/* Content area */}
                        <div className="px-5 pt-7 pb-10 sm:px-8 md:px-10 md:pt-9 md:pb-12">
                            {/* Title */}
                            <h1 className="text-[#442364] text-2.5xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6 md:mb-8 text-center md:text-left">
                                View 2026 Medicare Advantage Plans
                                <br className="hidden sm:block" />
                                in Your Area
                            </h1>

                            {/* ZIP Code Input */}
                            <div className="relative mb-8 mx-auto md:mx-0">
                                <input
                                    type="text"
                                    id="zipCode"
                                    value={zipCode}
                                    onChange={handleZipChange}
                                    placeholder="e.g. 10001"
                                    maxLength={5}
                                    inputMode="numeric"
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
                                    htmlFor="zipCode"
                                    className={`
                    absolute left-5 
                    ${zipCode ? 'top-2 text-xs' : 'top-4 text-sm'} 
                    font-semibold text-gray-500 
                    peer-focus:text-[#8F49AA] peer-focus:text-xs peer-focus:top-2 
                    transition-all duration-200 pointer-events-none
                  `}
                                >
                                    ZIP Code <span className="text-red-500">*</span>
                                </label>
                            </div>

                            {/* Buttons - always stacked vertically */}
                            <div className="flex flex-col gap-4 mx-auto md:mx-0">
                                <Link to={'/plans'}>
                                    <button
                                        type="button"
                                        className={`
                    w-full py-4.5 px-6 rounded-lg font-semibold text-lg
                    bg-[#8F49AA] text-white 
                    hover:bg-[#7a3e8f] active:bg-[#6a357d]
                    transition-colors duration-200 shadow-sm hover:shadow
                  `}
                                    >
                                        View All Available Plans
                                    </button>
                                </Link>

                                <button
                                    type="button"
                                    className={`
                    w-full py-4.5 px-6 rounded-lg font-semibold text-lg
                    border-2 border-[#8F49AA] text-[#8F49AA]
                    hover:bg-[#8F49AA]/10 active:bg-[#8F49AA]/20
                    transition-colors duration-200
                  `}
                                >
                                    Help Me Choose a Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;