import React, { useState } from 'react';
import { X } from 'lucide-react';

const PlanTypeFilter = ({ isOpen, onClose, onSubmit }) => {
  const [selectedPlanType, setSelectedPlanType] = useState('medicare');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selectedPlanType);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Plan Type</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Filter Plan Type</h3>

          {/* Plan Type Options */}
          <div className="space-y-4">
            {/* Medicare Advantage Plans */}
            <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all"
              style={{
                borderColor: selectedPlanType === 'medicare' ? '#8F49AA' : '#e5e7eb',
                backgroundColor: selectedPlanType === 'medicare' ? 'rgba(143, 73, 170, 0.1)' : '#ffffff',
              }}
            >
              <input
                type="radio"
                name="planType"
                value="medicare"
                checked={selectedPlanType === 'medicare'}
                onChange={(e) => setSelectedPlanType(e.target.value)}
                className="mt-1 w-5 h-5 cursor-pointer accent-blue-600"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-bold text-gray-900 text-lg">
                  Medicare Advantage Plans
                </h4>
                <p className="text-gray-700 text-sm mt-1">
                  These plans offer coverage for doctor and hospital visit, with or
                  without prescription drug coverage.
                </p>
              </div>
            </label>

            {/* Prescription Drugs Plans */}
            <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all"
              style={{
                borderColor: selectedPlanType === 'partd' ? '#8F49AA' : '#e5e7eb',
                backgroundColor: selectedPlanType === 'partd' ? 'rgba(143, 73, 170, 0.1)' : '#ffffff',
              }}
            >
              <input
                type="radio"
                name="planType"
                value="partd"
                checked={selectedPlanType === 'partd'}
                onChange={(e) => setSelectedPlanType(e.target.value)}
                className="mt-1 w-5 h-5 cursor-pointer accent-blue-600"
              />
              <div className="ml-4 flex-1">
                <h4 className="font-bold text-gray-900 text-lg">
                  Prescription Drugs (Part D) Plans
                </h4>
                <p className="text-gray-700 text-sm mt-1">
                  These plans offer prescription drug coverage only.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleSubmit}
            className="w-full bg-[#8F49AA] hover:bg-[#7a3e8f] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Show Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanTypeFilter;
