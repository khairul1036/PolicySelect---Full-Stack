import React, { useState } from 'react';
import { FiChevronLeft, FiPlusCircle, FiSearch, FiCheckCircle, FiX, FiInfo } from 'react-icons/fi';

const Prescriptions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedDrugs, setAddedDrugs] = useState([]);

  // Dummy search results (replace with real RxNorm / drug API later)
  const searchResults = searchQuery.length > 2 ? [
    { id: 1, name: 'Atorvastatin 20 mg', strength: '20 mg', form: 'Tablet', commonBrand: 'Lipitor' },
    { id: 2, name: 'Metformin 500 mg', strength: '500 mg', form: 'Tablet', commonBrand: 'Glucophage' },
    { id: 3, name: 'Losartan 50 mg', strength: '50 mg', form: 'Tablet', commonBrand: 'Cozaar' },
    { id: 4, name: 'Amlodipine 5 mg', strength: '5 mg', form: 'Tablet', commonBrand: 'Norvasc' },
  ] : [];

  const handleAddDrug = (drug) => {
    if (!addedDrugs.some(d => d.id === drug.id)) {
      setAddedDrugs([...addedDrugs, { ...drug, dosage: '', quantity: '', frequency: '' }]);
    }
    setSearchQuery(''); // clear after adding
  };

  const handleRemoveDrug = (id) => {
    setAddedDrugs(addedDrugs.filter(d => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-12">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-[#442364] hover:text-[#8F49AA] transition-colors"
          >
            <FiChevronLeft size={28} />
            <span className="text-xl font-medium">Back</span>
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-[#442364] flex-1 text-center">
            Add Your Rx Drugs
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg text-center md:text-left mb-10 leading-relaxed">
          Add your current prescriptions so we can show you which Medicare plans cover them best — including lower copays, preferred pharmacies, or better formulary tiers.
        </p>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="p-6 md:p-10 space-y-8">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by drug name (e.g. Lipitor, Metformin)..."
                className={`
                  w-full h-16 pl-14 pr-5 text-xl text-gray-900 bg-gray-50 border border-gray-300 rounded-xl
                  focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 outline-none transition-all
                `}
              />
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
            </div>

            {/* Search Results */}
            {searchQuery.length > 2 && (
              <div className="space-y-4">
                {searchResults.length > 0 ? (
                  searchResults.map((drug) => (
                    <div
                      key={drug.id}
                      className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#8F49AA]/10 flex items-center justify-center flex-shrink-0">
                          <FiCheckCircle className="text-[#8F49AA] text-2xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#442364]">{drug.name}</h3>
                          <p className="text-sm text-gray-600">
                            {drug.strength} • {drug.form} • {drug.commonBrand}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddDrug(drug)}
                        disabled={addedDrugs.some(d => d.id === drug.id)}
                        className={`
                          px-6 py-3 rounded-xl font-medium text-sm transition-colors
                          ${addedDrugs.some(d => d.id === drug.id)
                            ? 'bg-green-100 text-green-700 cursor-default'
                            : 'bg-[#8F49AA] text-white hover:bg-[#7a3e8f]'
                          }
                        `}
                      >
                        {addedDrugs.some(d => d.id === drug.id) ? 'Added' : 'Add'}
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    No medications found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}

            {/* Added Drugs List */}
            {addedDrugs.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[#442364] mb-4">
                  Added Medications ({addedDrugs.length})
                </h3>

                <div className="space-y-6">
                  {addedDrugs.map((drug) => (
                    <div
                      key={drug.id}
                      className="p-6 bg-green-50 rounded-xl border border-green-200 relative"
                    >
                      <button
                        onClick={() => handleRemoveDrug(drug.id)}
                        className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FiX size={24} />
                      </button>

                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <FiCheckCircle className="text-green-600 text-2xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#442364]">{drug.name}</h4>
                          <p className="text-sm text-gray-600">
                            {drug.strength} • {drug.form} • {drug.commonBrand}
                          </p>
                        </div>
                      </div>

                      {/* Dosage / Quantity / Frequency */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer w-full h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg text-base bg-white focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 outline-none transition-all"
                          />
                          <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]">
                            Dosage (e.g. 1 tablet)
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer w-full h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg text-base bg-white focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 outline-none transition-all"
                          />
                          <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]">
                            Quantity (e.g. 30)
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder=" "
                            className="peer w-full h-14 px-4 pt-6 pb-2 border border-gray-300 rounded-lg text-base bg-white focus:border-[#8F49AA] focus:ring-2 focus:ring-[#8F49AA]/30 outline-none transition-all"
                          />
                          <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#8F49AA]">
                            Frequency (e.g. daily)
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Can't Find Drug Help */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <FiInfo className="text-[#8F49AA] text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#442364] mb-3">
                Can't find your medication?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Try searching by generic name, brand name, or NDC code. If still not found, continue — we'll still show you plans with strong Part D coverage in your area.
              </p>
              <button className="text-[#8F49AA] font-medium hover:underline">
                Contact support for help →
              </button>
            </div>
          </div>
        </div>

        {/* Progress Hint */}
        <div className="mt-10 text-center text-gray-600">
          <p className="text-lg font-medium">
            Added {addedDrugs.length} medication{addedDrugs.length !== 1 ? 's' : ''} so far
          </p>
          <p className="mt-2 text-sm">
            The more drugs you add (with dosage & frequency), the more accurate your coverage and cost estimates will be.
          </p>
        </div>
      </div>

      {/* Sticky mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:hidden z-50">
        <button
          onClick={() => {
            // Trigger search or add flow
            alert('Start adding medications');
          }}
          className="
            w-full bg-[#8F49AA] text-white font-bold text-lg py-4 rounded-xl 
            shadow-md hover:bg-[#7a3e8f] transition-colors flex items-center justify-center gap-3
          "
        >
          <FiPlusCircle size={24} />
          Add a Medication
        </button>
      </div>
    </div>
  );
};

export default Prescriptions;