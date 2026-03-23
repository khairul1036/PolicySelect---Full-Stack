import React from 'react';
import { FiChevronRight, FiUser, FiMapPin, FiPhone, FiMail, FiHeart, FiActivity, FiEdit3, FiCheckCircle, FiXCircle } from 'react-icons/fi';

const Profile = () => {
    // Dummy progress (you can calculate this dynamically later)
    const profileCompletion = 25; // 1/6 sections filled → ~16.67%, rounded to 25 for demo

    const sections = [
        {
            title: 'My Personal Info',
            subtitle: '(1/6)',
            description: 'ZIP code, name, date of birth, gender, etc.',
            link: '/profile/personal-info',
            icon: <FiUser className="text-2xl text-[#8F49AA]" />,
            completed: true,
        },
        {
            title: 'My Current Plan',
            description: 'Add your existing Medicare plan to compare better',
            link: '/profile/current-plan',
            icon: <FiHeart className="text-2xl text-[#8F49AA]" />,
            completed: false,
        },
        {
            title: 'My Healthcare Providers',
            subtitle: '(0)',
            description: 'Add doctors & hospitals to see in-network coverage',
            link: '/profile/providers',
            icon: <FiActivity className="text-2xl text-[#8F49AA]" />,
            completed: false,
        },
        {
            title: 'My Rx Drugs',
            subtitle: '(0)',
            description: 'Add your medications to check plan coverage',
            link: '/profile/prescriptions',
            icon: <FiEdit3 className="text-2xl text-[#8F49AA]" />,
            completed: false,
        },
        {
            title: 'My Benefit Preferences',
            subtitle: '(0)',
            description: 'Choose what matters most: low premium, dental, vision, etc.',
            link: '/profile/benefit-preferences',
            icon: <FiMapPin className="text-2xl text-[#8F49AA]" />,
            completed: false,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20 md:pb-10">
            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                {/* Header */}
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#442364]">
                        My PolicySelect Profile
                    </h1>
                    <p className="mt-3 text-lg text-gray-600">
                        Welcome back! The more you complete, the better your plan matches.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-10 bg-white rounded-xl shadow border border-gray-200 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-[#8F49AA]/10 flex items-center justify-center">
                                <FiUser className="text-2xl text-[#8F49AA]" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#442364]">Welcome!</h2>
                                <p className="text-gray-600">Let's personalize your experience</p>
                            </div>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-xl font-bold text-[#8F49AA]">
                                Profile {profileCompletion}% Complete
                            </p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute h-full bg-gradient-to-r from-[#8F49AA] to-[#442364] rounded-full transition-all duration-1000"
                            style={{ width: `${profileCompletion}%` }}
                        ></div>
                    </div>
                </div>

                {/* Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {sections.map((section, index) => (
                        <a
                            key={section.title}
                            href={section.link}
                            className={`
                group bg-white rounded-xl shadow border border-gray-200 
                hover:shadow-xl hover:border-[#8F49AA]/30 
                transition-all duration-300 overflow-hidden
                flex flex-col
              `}
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-[#8F49AA]/10 flex items-center justify-center flex-shrink-0">
                                            {section.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#442364] group-hover:text-[#8F49AA] transition-colors">
                                                {section.title}
                                                {section.subtitle && (
                                                    <span className="ml-2 text-base font-normal text-gray-500">
                                                        {section.subtitle}
                                                    </span>
                                                )}
                                            </h3>
                                            <p className="mt-1 text-gray-600 text-base">
                                                {section.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-[#8F49AA] opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FiChevronRight size={28} />
                                    </div>
                                </div>
                            </div>

                            {/* Status indicator */}
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm">
                                <span className="font-medium">
                                    {section.completed ? 'Completed' : 'Not started'}
                                </span>
                                {section.completed ? (
                                    <FiCheckCircle className="text-green-500 text-xl" />
                                ) : (
                                    <FiXCircle className="text-gray-400 text-xl" />
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Call to Action - Shop Plans */}
                <div className="mt-12 text-center">
                    <button
                        onClick={() => window.location.href = '/plans'}
                        className="
              inline-flex items-center justify-center 
              bg-[#8F49AA] hover:bg-[#7a3e8f] active:bg-[#6a357d]
              text-white font-bold text-xl 
              px-10 py-5 rounded-xl shadow-lg
              transition-all duration-300 transform hover:scale-105 active:scale-100
              w-full md:w-auto
            "
                    >
                        Shop Personalized Plans Now
                    </button>
                    <p className="mt-4 text-gray-600 text-sm">
                        Complete more sections to get even better matches
                    </p>
                </div>
            </div>

            {/* Mobile fixed bottom bar (optional - if you want) */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 md:hidden z-50">
                <button
                    onClick={() => window.location.href = '/plans'}
                    className="w-full bg-[#8F49AA] text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-[#7a3e8f] transition-colors"
                >
                    Shop Plans
                </button>
            </div>
        </div>
    );
};

export default Profile;