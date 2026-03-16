import React, { useState } from 'react';
import { X } from 'lucide-react';

const PlanSortModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedSort, setSelectedSort] = useState('recommended');

  const sortOptions = [
    {
      id: 'recommended',
      label: 'Recommended Matches',
      description: 'Based on your preferences',
    },
    {
      id: 'premium',
      label: 'Monthly Premium',
      description: 'From lowest to highest monthly premium',
    },
    {
      id: 'rating',
      label: 'Plan Rating',
      description: 'From highest to lowest plan rating',
    },
    {
      id: 'outOfPocket',
      label: 'Max Out-of-Pocket',
      description: 'From lowest to highest max out of pocket',
    },
  ];

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selectedSort);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Sort</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Sort Plans By</h3>

          {sortOptions.map((option) => (
            <label
              key={option.id}
              className={`flex items-start p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedSort === option.id
                  ? 'border-[#8F49AA] bg-[#8F49AA]/10'
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              {/* Radio Button */}
              <div className="flex items-center mt-1 mr-4 flex-shrink-0">
                <input
                  type="radio"
                  name="sort"
                  value={option.id}
                  checked={selectedSort === option.id}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-5 h-5 cursor-pointer accent-[#8F49AA]"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-base">
                  {option.label}
                </span>
                <span className="text-gray-600 text-sm mt-1">
                  {option.description}
                </span>
              </div>
            </label>
          ))}
        </div>

        {/* Footer Button */}
        <div className="p-6 border-t border-gray-200">
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

export default PlanSortModal;
