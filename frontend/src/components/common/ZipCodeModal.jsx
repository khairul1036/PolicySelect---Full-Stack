import { useState } from 'react';

const ZipCodeModal = ({ isOpen, currentZip, onApply, onCancel }) => {
  const [zipCode, setZipCode] = useState(currentZip || '');

  const handleApply = () => {
    if (zipCode.trim()) {
      onApply(zipCode);
      setZipCode('');
    }
  };

  const handleCancel = () => {
    setZipCode('');
    onCancel();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        {/* Modal Header */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Enter Your ZIP Code
        </h2>

        {/* ZIP Input */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 5);
              setZipCode(value);
            }}
            placeholder="e.g. 12121"
            maxLength={5}
            inputMode="numeric"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#8F49AA] text-lg"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleCancel}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={!zipCode.trim()}
            className="flex-1 bg-[#8F49AA] hover:bg-[#7a3e8f] disabled:bg-gray-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZipCodeModal;
