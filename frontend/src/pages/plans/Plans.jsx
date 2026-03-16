import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
    FiCheck,
    FiCheckCircle,
    FiChevronDown,
    FiFilter,
    FiPlusCircle,
    FiStar,
    FiXCircle,
} from 'react-icons/fi';
import { plans } from '../../data/plans';
import ZipCodeModal from '../../components/common/ZipCodeModal';
import PlanTypeFilter from '../../components/common/PlanTypeFilter';
import PlanSortModal from '../../components/common/PlanSortModal';

const Plans = () => {
    const navigate = useNavigate();
    const [zipCode, setZipCode] = useState('21157');
    const [isZipModalOpen, setIsZipModalOpen] = useState(false);
    const [isPlanTypeModalOpen, setIsPlanTypeModalOpen] = useState(false);
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const [selectedPlans, setSelectedPlans] = useState([]);

    const toggleCompare = (planId) => {
        setSelectedPlans((prev) => {
            if (prev.includes(planId)) {
                return prev.filter((id) => id !== planId);
            }
            if (prev.length >= 3) {
                return prev;
            }
            return [...prev, planId];
        });
    };

    const handleZipApply = (newZip) => {
        setZipCode(newZip);
        setIsZipModalOpen(false);
    };

    const handlePlanTypeFilter = (planType) => {
        console.log('Selected plan type:', planType);
        // Add your plan type filtering logic here
    };

    const handleSortChange = (sortType) => {
        console.log('Selected sort:', sortType);
        // Add your sort logic here
    };

    const clearCompare = () => {
        setSelectedPlans([]);
    };

    const handleCompare = () => {
        if (selectedPlans.length < 2) {
            return;
        }

        const [planId1, planId2] = selectedPlans;
        const params = new URLSearchParams({
            fips1: '24013',
            fips2: '24013',
            planId1,
            planId2,
            productType1: 'C',
            productType2: 'C',
            year1: '2026',
            year2: '2026',
            zip1: '21157',
            zip2: '21157',
        });

        navigate(`/plans/compare?${params.toString()}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed top bar with filters, sort, call button */}
            <div className="sticky top-20 z-50 bg-white shadow-md border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
                    {/* Call to Enroll button */}
                    <button 
                        onClick={() => navigate('/enroll')}
                        className="bg-[#F28C38] hover:bg-[#e07b2f] text-white font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
                        Call to Enroll
                    </button>

                    {/* Filters / Sort / Plan Type pills */}
                    <div className="flex flex-wrap gap-3">
                        <button 
                            onClick={() => setIsSortModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium">
                            <span>Filters</span>
                            <FiFilter size={18} />
                        </button>

                        <button 
                            onClick={() => setIsSortModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium">
                            <span className="hidden md:inline">Sort by Recommended Matches</span>
                            <span className="md:hidden">Sort</span>
                            <FiChevronDown size={18} />
                        </button>

                        <button 
                            onClick={() => setIsPlanTypeModalOpen(true)}
                            className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium">
                            <span>Medicare Advantage Plans</span>
                            <FiChevronDown size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Better Matching Results Banner */}
                <section className="mb-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        <div className="hidden md:block w-49.75 h-30 shrink-0">
                            <img
                                src="https://3dapi.nbsk.top/uploads/2026-03-13_08-35-12_2.7942.png"
                                alt="Happy couple"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-[#442364] text-2xl md:text-3xl font-bold mb-3">
                                Get Better Matching Results!
                            </h1>
                            <p className="text-gray-600 mb-5">
                                Complete these steps to view and compare plans for your needs:
                            </p>

                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {[
                                    'Healthcare Providers',
                                    'Rx Drugs',
                                    'Current Plan',
                                    'Benefit Preferences',
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="flex items-center gap-2 px-4 py-2 border border-[#8F49AA] bg-white rounded-md text-[#8F49AA] hover:bg-[#8F49AA]/10 transition-colors text-sm font-medium"
                                    >
                                        <FiPlusCircle size={20} />
                                        <span>{item}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Plan count + ZIP pill */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <p className="text-lg font-medium text-gray-900">2026 Plans ({plans.length})</p>

                    <button 
                        onClick={() => setIsZipModalOpen(true)}
                        className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm">
                        <span>ZIP: {zipCode}</span>
                        <FiChevronDown size={18} />
                    </button>
                </div>

                {/* Plans List */}
                <div className="space-y-6">
                    {plans.map((plan) => {
                        const isSelected = selectedPlans.includes(plan.id);
                        const compareDisabled = !isSelected && selectedPlans.length >= 3;

                        return (
                            <div
                                key={plan.id}
                                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Header - Plan Type */}
                                <div className="bg-[#8F49AA] px-5 py-3 hidden md:flex items-center justify-between">
                                    <span className="text-white font-medium">{plan.type}</span>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center bg-white/90 px-3 py-1 rounded text-sm">
                                            <FiStar className="text-[#8F49AA] mr-1.5" size={16} />
                                            {plan.rating} out of 5
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile header */}
                                <div className="md:hidden bg-gray-100 px-5 py-4">
                                    <div className="inline-block bg-[#8F49AA] text-white text-sm font-medium px-3 py-1 rounded mb-3">
                                        {plan.type}
                                    </div>
                                    {/* Carrier logo mobile */}
                                    <div className="flex justify-center mb-4">
                                        <img
                                            src={plan.carrierLogo}
                                            alt="Carrier logo"
                                            className="h-16 object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="p-5 md:p-6 space-y-6">
                                    {/* Plan name & subtitle */}
                                    <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                                        <div className="hidden md:flex w-28 h-20 items-center justify-center bg-gray-50 border border-gray-200 rounded-lg">
                                            <img
                                                src={plan.carrierLogo}
                                                alt="Carrier logo"
                                                className="h-14 object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-semibold text-[#442364]">
                                                {plan.name}
                                            </h2>
                                            <p className="text-sm text-gray-500 mt-1">Plan ID: {plan.planId}</p>
                                        </div>
                                    </div>


                                    {/* Benefits + Premium */}
                                    <div className='flex flex-col md:flex-row md:items-center gap-6'>
                                        {/* Benefits */}
                                        <div>
                                            <p className="text-2xl md:text-xl font-bold text-[#442364] pb-2">Benefits Coverage</p>
                                            <div className="flex flex-wrap gap-4">
                                                {plan.benefits.slice(0, 6).map((benefit) => (
                                                    <div key={benefit.name} className="flex items-center gap-1.5">
                                                        {benefit.covered ? (
                                                            <FiCheckCircle className="text-[#8F49AA]" size={18} />
                                                        ) : (
                                                            <FiXCircle className="text-red-500" size={18} />
                                                        )}
                                                        <span className={`text-sm ${!benefit.covered ? 'line-through opacity-60' : ''}`}>{benefit.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Premium */}
                                        <div className="flex items-center justify-between md:justify-start gap-4">
                                            <div>
                                                <p className="text-2xl md:text-3xl font-bold text-[#442364]">
                                                    {plan.premium}
                                                </p>
                                                <p className="text-sm text-gray-600">Monthly Premium</p>
                                            </div>

                                            {/* Mobile rating */}
                                            <div className="md:hidden flex items-center bg-gray-100 px-3 py-1.5 rounded text-sm">
                                                <FiStar className="text-[#8F49AA] mr-1.5" size={16} />
                                                {plan.rating} / 5
                                            </div>
                                        </div>
                                    </div>

                                    {/* Provider + Rx input buttons */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button className="flex items-center justify-between gap-3 rounded-lg border border-gray-300 px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Your Healthcare Providers</p>
                                                <p className="text-xs text-gray-500">Add Healthcare Providers</p>
                                            </div>
                                            <FiChevronDown className="text-gray-500" />
                                        </button>
                                        <button className="flex items-center justify-between gap-3 rounded-lg border border-gray-300 px-4 py-3 text-left hover:bg-gray-50 transition-colors">
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Your Rx Drugs</p>
                                                <p className="text-xs text-gray-500">Add Rx Drugs</p>
                                            </div>
                                            <FiChevronDown className="text-gray-500" />
                                        </button>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                                        <Link
                                            to={`/plans/${plan.id}`}
                                            className="flex-1 bg-[#8F49AA]/20 hover:bg-[#7a3e8f]/40 text-[#442364] font-bold py-4 px-6 rounded-lg text-center transition-colors"
                                        >
                                            View Plan Details
                                        </Link>

                                        <button
                                            type="button"
                                            onClick={() => toggleCompare(plan.id)}
                                            disabled={compareDisabled}
                                            aria-pressed={isSelected}
                                            className={`flex items-center justify-center gap-2 border-2 font-bold py-4 px-8 rounded-lg transition-colors md:flex ${isSelected
                                                    ? 'border-[#8F49AA] bg-[#8F49AA]/10 text-[#8F49AA]'
                                                    : 'border-[#8F49AA] text-[#8F49AA] hover:bg-[#8F49AA]/10'
                                                } ${compareDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <span className="w-5 h-5 rounded border border-gray-300 bg-gray-100 flex items-center justify-center">
                                                {isSelected && <FiCheck size={14} className="text-[#8F49AA]" />}
                                            </span>
                                            Compare
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
            {selectedPlans.length >= 2 && (
                <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white border border-gray-200 shadow-lg rounded-full px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
                            <button
                                type="button"
                                onClick={handleCompare}
                                className="text-[#442364] font-semibold hover:underline"
                            >
                                Compare Plans ({selectedPlans.length}/3) {'>'}
                            </button>
                            <button
                                type="button"
                                onClick={clearCompare}
                                className="text-sm font-semibold text-gray-500 hover:text-gray-700"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Plan Sort Modal */}
            <PlanSortModal 
                isOpen={isSortModalOpen}
                onClose={() => setIsSortModalOpen(false)}
                onSubmit={handleSortChange}
            />
            
            
            {/* Plan Type Filter Modal */}
            <PlanTypeFilter 
                isOpen={isPlanTypeModalOpen}
                onClose={() => setIsPlanTypeModalOpen(false)}
                onSubmit={handlePlanTypeFilter}
            />
            {/* ZIP Code Modal */}
            <ZipCodeModal 
                isOpen={isZipModalOpen}
                currentZip={zipCode}
                onApply={handleZipApply}
                onCancel={() => setIsZipModalOpen(false)}
            />
        </div>
    );
};

export default Plans;