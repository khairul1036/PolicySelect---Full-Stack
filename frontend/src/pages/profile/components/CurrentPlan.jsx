import React from 'react';
import { FiChevronLeft, FiPlusCircle, FiCheckCircle } from 'react-icons/fi';

const CurrentPlan = () => {
    // You can later make this dynamic from user profile state
    const hasCurrentPlan = false; // false = empty state, true = show plan details

    return (
        <div className="min-h-screen bg-gray-50 pb-24 md:pb-12">
            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                {/* Header with Back */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 text-[#442364] hover:text-[#8F49AA] transition-colors"
                    >
                        <FiChevronLeft size={28} />
                        <span className="text-xl font-medium">Back</span>
                    </button>

                    <h1 className="text-3xl md:text-4xl font-bold text-[#442364] flex-1 text-center">
                        Your Current Plan
                    </h1>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg text-center md:text-left mb-10">
                    Add your existing Medicare plan so we can compare it with better options available in your area.
                </p>

                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                    {hasCurrentPlan ? (
                        // Filled state - when user has added a plan
                        <div className="p-6 md:p-10 space-y-8">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <FiCheckCircle className="text-green-500 text-5xl" />
                                <div>
                                    <h2 className="text-2xl font-bold text-[#442364]">
                                        UnitedHealthcare AARP Medicare Advantage
                                    </h2>
                                    <p className="text-gray-600 mt-1">
                                        Plan ID: H1234-567 • 2026 • ZIP 21157
                                    </p>
                                </div>
                            </div>

                            {/* Plan Summary */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-semibold text-[#442364] mb-4">Your Plan Summary</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex justify-between">
                                        <span>Monthly Premium:</span>
                                        <span className="font-medium">$28.00</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Max Out-of-Pocket:</span>
                                        <span className="font-medium">$6,700</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Rx Coverage:</span>
                                        <span className="text-green-600 font-medium">Included</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Dental/Vision/Hearing:</span>
                                        <span className="text-green-600 font-medium">Yes</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 py-4 px-6 border-2 border-[#8F49AA] text-[#8F49AA] font-bold rounded-xl hover:bg-[#8F49AA]/10 transition-colors">
                                    Edit Plan Details
                                </button>
                                <button className="flex-1 py-4 px-6 bg-[#8F49AA] text-white font-bold rounded-xl hover:bg-[#7a3e8f] transition-colors">
                                    Compare with New Plans
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Empty state - when no plan is added yet
                        <div className="p-8 md:p-12 text-center space-y-8">
                            <div className="flex flex-col items-center gap-6">
                                <div className="w-24 h-24 rounded-full bg-[#8F49AA]/10 flex items-center justify-center">
                                    <FiPlusCircle className="text-[#8F49AA] text-5xl" />
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#442364] mb-3">
                                        No Current Plan Added
                                    </h2>
                                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                                        Add your existing Medicare plan so we can show you how new plans compare in cost, coverage, and benefits.
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        // Open modal / go to add plan flow
                                        alert('Open Add Current Plan modal or redirect to form');
                                    }}
                                    className="
                    inline-flex items-center gap-3 px-10 py-5 
                    bg-[#8F49AA] hover:bg-[#7a3e8f] active:bg-[#6a357d]
                    text-white font-bold text-xl rounded-xl shadow-lg
                    transition-all transform hover:scale-105 active:scale-100
                  "
                                >
                                    <FiPlusCircle size={28} />
                                    Add Your Current Plan
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Info Box */}
                <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 text-gray-700">
                    <p className="text-lg font-medium mb-3 flex items-center gap-2">
                        <FiCheckCircle className="text-[#8F49AA] text-xl" />
                        Why add your current plan?
                    </p>
                    <ul className="space-y-2 text-base list-disc pl-5">
                        <li>See exact cost savings vs. new plans</li>
                        <li>Check if your doctors & drugs are covered</li>
                        <li>Compare benefits side-by-side</li>
                        <li>Avoid losing coverage you like</li>
                    </ul>
                </div>
            </div>

            {/* Mobile fixed bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:hidden z-50">
                <button
                    onClick={() => {
                        // Trigger add plan action
                        alert('Add current plan flow');
                    }}
                    className="w-full bg-[#8F49AA] text-white font-bold text-lg py-4 rounded-xl shadow-md hover:bg-[#7a3e8f] transition-colors"
                >
                    Add Your Current Plan
                </button>
            </div>
        </div>
    );
};

export default CurrentPlan;