import React, { useState } from 'react';
import { FiChevronLeft, FiInfo, FiPlusCircle, FiSearch, FiUserCheck, FiX } from 'react-icons/fi';

const Providers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [addedProviders, setAddedProviders] = useState([]);

  // Dummy search results (replace with real API later)
  const searchResults = searchQuery.length > 2 ? [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Primary Care', location: 'Dallas, TX' },
    { id: 2, name: 'Texas Heart Institute - Dr. Michael Lee', specialty: 'Cardiology', location: 'Dallas, TX' },
    { id: 3, name: 'Dallas Family Clinic - Dr. Emily Carter', specialty: 'Family Medicine', location: 'Dallas, TX' },
  ] : [];

  const handleAddProvider = (provider) => {
    if (!addedProviders.some(p => p.id === provider.id)) {
      setAddedProviders([...addedProviders, provider]);
    }
    setSearchQuery(''); // clear search after adding
  };

  const handleRemoveProvider = (id) => {
    setAddedProviders(addedProviders.filter(p => p.id !== id));
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
            Add Your Healthcare Providers
          </h1>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg text-center md:text-left mb-10 leading-relaxed">
          Add your doctors, specialists, hospitals, or clinics so we can show you which Medicare plans include them in-network — helping you avoid surprise bills.
        </p>

        {/* Search & Add Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-10">
          <div className="p-6 md:p-10 space-y-8">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by doctor name, specialty, or clinic..."
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
                  searchResults.map((provider) => (
                    <div
                      key={provider.id}
                      className="flex items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#8F49AA]/10 flex items-center justify-center flex-shrink-0">
                          <FiUserCheck className="text-[#8F49AA] text-2xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#442364]">{provider.name}</h3>
                          <p className="text-sm text-gray-600">
                            {provider.specialty} • {provider.location}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleAddProvider(provider)}
                        disabled={addedProviders.some(p => p.id === provider.id)}
                        className={`
                          px-6 py-3 rounded-xl font-medium text-sm transition-colors
                          ${addedProviders.some(p => p.id === provider.id)
                            ? 'bg-green-100 text-green-700 cursor-default'
                            : 'bg-[#8F49AA] text-white hover:bg-[#7a3e8f]'
                          }
                        `}
                      >
                        {addedProviders.some(p => p.id === provider.id) ? 'Added' : 'Add'}
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    No providers found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}

            {/* Added Providers List */}
            {addedProviders.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-[#442364] mb-4">
                  Added Providers ({addedProviders.length})
                </h3>
                <div className="space-y-4">
                  {addedProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className="flex items-center justify-between p-5 bg-green-50 rounded-xl border border-green-200"
                    >
                      <div className="flex items-center gap-4">
                        <FiUserCheck className="text-green-600 text-2xl" />
                        <div>
                          <h4 className="font-semibold text-[#442364]">{provider.name}</h4>
                          <p className="text-sm text-gray-600">
                            {provider.specialty} • {provider.location}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveProvider(provider.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Can't Find Provider Help */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 mb-10">
          <div className="flex items-start gap-4">
            <FiInfo className="text-[#8F49AA] text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#442364] mb-3">
                Can't find your provider?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Try searching by NPI number, exact clinic name, or partial name. If still not found, you can continue — we'll still show you plans with strong local networks.
              </p>
              <button className="text-[#8F49AA] font-medium hover:underline">
                Contact support for help →
              </button>
            </div>
          </div>
        </div>

        {/* Progress Hint */}
        <div className="text-center text-gray-600">
          <p className="text-lg">
            Added {addedProviders.length} provider{addedProviders.length !== 1 ? 's' : ''} so far
          </p>
          <p className="mt-2 text-sm">
            The more providers you add, the more accurate your in-network coverage results will be.
          </p>
        </div>
      </div>

      {/* Sticky mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl p-4 md:hidden z-50">
        <button
          onClick={() => {
            // Trigger search or add flow
            alert('Start adding providers');
          }}
          className="
            w-full bg-[#8F49AA] text-white font-bold text-lg py-4 rounded-xl 
            shadow-md hover:bg-[#7a3e8f] transition-colors flex items-center justify-center gap-3
          "
        >
          <FiPlusCircle size={24} />
          Add a Provider
        </button>
      </div>
    </div>
  );
};

export default Providers;