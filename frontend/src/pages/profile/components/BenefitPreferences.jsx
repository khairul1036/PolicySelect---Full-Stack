// BenefitPreferences.jsx
import React, { useState } from 'react';
import { 
  DollarSign, 
  Pill, 
  Stethoscope, 
  Smile, 
  Eye, 
  Ear, 
  Car, 
  CreditCard, 
  HeartPulse 
} from 'lucide-react'; // or use heroicons / font-awesome / your preferred icon lib

const BenefitPreferences = () => {
  const [selectedBenefits, setSelectedBenefits] = useState(new Set());

  const toggleBenefit = (benefitId) => {
    setSelectedBenefits(prev => {
      const newSet = new Set(prev);
      if (newSet.has(benefitId)) {
        newSet.delete(benefitId);
      } else {
        newSet.add(benefitId);
      }
      return newSet;
    });
  };

  const benefits = [
    {
      id: 'plan-premium',
      title: 'Plan Premium',
      icon: DollarSign,
      dataTestId: 'benefit-preference-plan-premium'
    },
    {
      id: 'rx-drug-coverage',
      title: 'Rx Drug Coverage',
      icon: Pill,
      dataTestId: 'benefit-preference-rx-drug-coverage'
    },
    {
      id: 'healthcare-provider-coverage',
      title: 'Healthcare Provider Coverage',
      icon: Stethoscope,
      dataTestId: 'benefit-preference-healthcare-provider-coverage'
    },
    {
      id: 'dental',
      title: 'Dental',
      icon: Smile,
      dataTestId: 'benefit-preference-dental'
    },
    {
      id: 'vision',
      title: 'Vision',
      icon: Eye,
      dataTestId: 'benefit-preference-vision'
    },
    {
      id: 'hearing',
      title: 'Hearing',
      icon: Ear,
      dataTestId: 'benefit-preference-hearing'
    },
    {
      id: 'transportation',
      title: 'Transportation',
      icon: Car,
      dataTestId: 'benefit-preference-transportation'
    },
    {
      id: 'flex-card',
      title: 'Flex Card',
      icon: CreditCard,
      dataTestId: 'benefit-preference-flex-card'
    },
    {
      id: 'fitness',
      title: 'Fitness',
      icon: HeartPulse,
      dataTestId: 'benefit-preference-fitness'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-10">
      {/* Main content */}
      <div className="flex-1 py-6 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
          {/* Hero image - mobile only */}
          <div className="md:hidden mb-6 rounded-xl overflow-hidden">
            <img 
              src="/needs-hands.jpg" 
              alt="Couple holding hands" 
              className="w-full h-56 object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Your Benefit Preferences
          </h1>
          <p className="text-gray-600 mb-8">
            Select the plan features that are most important to you. Choose all that apply.
          </p>

          {/* Benefit grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map(benefit => {
              const Icon = benefit.icon;
              const isSelected = selectedBenefits.has(benefit.id);

              return (
                <button
                  key={benefit.id}
                  type="button"
                  role="checkbox"
                  aria-checked={isSelected}
                  data-testid={benefit.dataTestId}
                  onClick={() => toggleBenefit(benefit.id)}
                  className={`
                    flex items-center p-4 rounded-lg border-2 text-left transition-all duration-200
                    ${isSelected 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                    }
                  `}
                >
                  <div className="mr-4 text-blue-600">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-medium text-gray-900">
                    {benefit.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
            <button
              type="button"
              className="px-8 py-4 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Back
            </button>
            <button
              type="button"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Save Updates
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BenefitPreferences;