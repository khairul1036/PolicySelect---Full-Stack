import React, { useState } from 'react';
import {
  DollarSign,
  Pill,
  Users,
  Smile,
  Eye,
  Volume2,
  Car,
  CreditCard,
  Activity,
} from 'lucide-react';

const PlanBenefits = ({ onSubmit }) => {
  const [selectedBenefits, setSelectedBenefits] = useState({
    planPremium: false,
    rxDrugCoverage: false,
    healthcareProvider: false,
    dental: false,
    vision: false,
    hearing: false,
    transportation: false,
    flexCard: false,
    fitness: false,
  });

  const benefits = [
    {
      id: 'planPremium',
      label: 'Plan Premium',
      icon: DollarSign,
      type: 'primary',
    },
    {
      id: 'rxDrugCoverage',
      label: 'Rx Drug Coverage',
      icon: Pill,
      type: 'primary',
    },
    {
      id: 'healthcareProvider',
      label: 'Healthcare Provider Coverage',
      icon: Users,
      type: 'primary',
    },
    {
      id: 'dental',
      label: 'Dental',
      icon: Smile,
      type: 'secondary',
    },
    {
      id: 'vision',
      label: 'Vision',
      icon: Eye,
      type: 'secondary',
    },
    {
      id: 'hearing',
      label: 'Hearing',
      icon: Volume2,
      type: 'secondary',
    },
    {
      id: 'transportation',
      label: 'Transportation',
      icon: Car,
      type: 'secondary',
    },
    {
      id: 'flexCard',
      label: 'Flex Card',
      icon: CreditCard,
      type: 'secondary',
    },
    {
      id: 'fitness',
      label: 'Fitness',
      icon: Activity,
      type: 'secondary',
    },
  ];

  const toggleBenefit = (id) => {
    setSelectedBenefits((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSubmit = () => {
    const selected = Object.keys(selectedBenefits).filter(
      (key) => selectedBenefits[key]
    );
    if (onSubmit) {
      onSubmit(selected);
    }
  };

  return (
    <main className="min-h-screen bg-white md:min-h-screen md:pb-14 md:pt-6 md:bg-gray-100">
      <div className="relative mx-auto flex flex-col max-w-177.5">
        <div className="flex grow flex-col bg-white px-4 pt-4 pb-10.5 md:px-8 md:pt-8 md:pb-10 rounded-none md:rounded-2xl md:border md:border-gray-200">
          {/* Image - Hidden on mobile */}
          <div className="hidden md:flex relative mb-5 min-h-56 justify-center overflow-hidden rounded-lg">
            <img
              alt="Couple discussing healthcare plans"
              src="https://plus.unsplash.com/premium_photo-1731617406308-24dc6c38e3e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="font-sans text-[#0a2f7a] text-[26px] md:text-[32px] font-bold mb-2">
              Select Important Plan Benefits
            </h1>
            <p className="text-gray-600 text-base">
              Select the plan features that are most important to you. Choose all
              that apply.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-5">
            <div className="md:grid md:auto-rows-fr md:grid-cols-3 md:gap-x-4 md:gap-y-4 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <button
                  key={benefit.id}
                  onClick={() => toggleBenefit(benefit.id)}
                  role="checkbox"
                  aria-checked={selectedBenefits[benefit.id]}
                  className={`relative p-4 md:p-6 rounded-lg border-2 transition-all flex flex-col items-center justify-center text-center min-h-25 md:min-h-30 ${
                    selectedBenefits[benefit.id]
                      ? benefit.type === 'primary'
                        ? 'bg-gray-100 border-gray-300'
                        : 'bg-white border-[#0a2f7a]'
                      : benefit.type === 'primary'
                      ? 'bg-gray-100 border-gray-300'
                      : 'bg-white border-gray-300'
                  }`}
                  type="button"
                >
                  {/* Icon */}
                  <div className="mb-2">
                    <benefit.icon
                      className="w-7 h-7 md:w-8 md:h-8 text-gray-700"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className={`text-xs md:text-sm font-medium ${
                      selectedBenefits[benefit.id] && benefit.type === 'secondary'
                        ? 'text-[#0a2f7a]'
                        : 'text-gray-700'
                    }`}
                  >
                    {benefit.label}
                  </span>

                  {/* Checkbox Indicator for Selected Secondary */}
                  {selectedBenefits[benefit.id] && benefit.type === 'secondary' && (
                    <div className="absolute top-2 right-2 w-4 h-4 md:w-5 md:h-5 bg-[#0a2f7a] rounded-full flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 md:w-3 md:h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-full md:w-full px-8 md:px-12 py-3 md:py-4 bg-[#8F49AA] hover:bg-[#7a3e8f] text-white font-bold rounded-md transition-colors duration-200"
            >
              See Plan Results
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlanBenefits;
