// src/pages/Compare.jsx
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiPlusCircle,
  FiUser,
  FiXCircle,
} from 'react-icons/fi';
import { plans as allPlans } from '../../data/plans';

const costRows = [
  { label: 'Monthly Premium', values: ['$0', '$0', '$0'] },
  { label: 'Max Out-of-Pocket (In-network)', values: ['$9,250', '$9,250', '$9,250'] },
  { label: 'Annual Medical Deductible', values: ['$0', '$0', '$0'] },
];

const benefitRows = [
  { label: 'Rx Drugs', values: [true, true, true] },
  { label: 'Dental', values: [false, true, true] },
  { label: 'Vision', values: [true, true, true] },
  { label: 'Hearing', values: [true, true, true] },
  { label: 'OTC', values: [true, true, true] },
  { label: 'Transportation', values: [true, true, true] },
];

const documents = [
  { label: 'Summary of Benefits', hint: '(PDF)' },
  { label: 'Evidence of Coverage', hint: '(PDF)' },
  { label: 'Star Ratings', hint: '(PDF)' },
];

const Compare = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const planId1 = searchParams.get('planId1');
  const planId2 = searchParams.get('planId2');
  const planId3 = searchParams.get('planId3');

  const selectedIds = [planId1, planId2, planId3].filter(Boolean);
  const plans = selectedIds.length
    ? allPlans.filter((plan) => selectedIds.includes(plan.id))
    : allPlans.slice(0, 3);

  const filledPlans = [...plans];
  while (filledPlans.length < 3) {
    filledPlans.push({
      id: `placeholder-${filledPlans.length}`,
      name: 'Add a plan to compare',
      planId: '--',
      year: '2026',
      zip: '21157',
      logo: '',
      isPlaceholder: true,
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Purple header banner */}
      <div className="bg-[#442364] text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Compare Plans
          </h1>
        </div>
      </div>

      {/* Sticky plan cards */}
      <div className="sticky top-0 z-30 bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-x divide-gray-200">
            {filledPlans.map((plan) => (
              <div
                key={plan.id}
                className="p-5 md:p-6 bg-white flex flex-col"
              >
                <h2 className="text-lg md:text-xl font-semibold text-[#442364] mb-1.5 line-clamp-2">
                  {plan.isPlaceholder ? 'Add Plan' : plan.name}
                </h2>

                {!plan.isPlaceholder && (
                  <div className="text-sm text-gray-600 space-y-0.5 mb-4">
                    <p>Plan ID: {plan.planId}</p>
                    <p>{plan.year} • ZIP {plan.zip}</p>
                  </div>
                )}

                <div className="mt-auto h-20 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
                  {plan.logo ? (
                    <img
                      src={plan.logo}
                      alt="Carrier logo"
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="text-5xl mb-1">+</div>
                      <p className="text-xs">Select a plan</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main scrollable content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-12">
          {/* Plan Costs */}
          <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FiFileText className="text-[#8F49AA] text-3xl" />
                <h3 className="text-2xl font-bold text-[#442364]">Plan Costs</h3>
              </div>
              <FiChevronDown className="text-gray-500 text-xl" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 pr-8 font-semibold text-gray-700 text-lg">Category</th>
                    {filledPlans.map((_, i) => (
                      <th key={i} className="py-4 px-6 text-center font-semibold text-gray-700 text-lg">
                        Plan {i + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-5 pr-8 font-medium text-gray-800">{row.label}</td>
                      {row.values.map((value, i) => (
                        <td key={i} className="py-5 px-6 text-center text-gray-900 font-medium">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-[#8F49AA] text-3xl" />
                <h3 className="text-2xl font-bold text-[#442364]">Benefits</h3>
              </div>
              <FiChevronDown className="text-gray-500 text-xl" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 pr-8 font-semibold text-gray-700 text-lg">Benefit</th>
                    {filledPlans.map((_, i) => (
                      <th key={i} className="py-4 px-6 text-center font-semibold text-gray-700 text-lg">
                        Plan {i + 1}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benefitRows.map((row) => (
                    <tr key={row.label} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-5 pr-8 font-medium text-gray-800">{row.label}</td>
                      {row.values.map((included, i) => (
                        <td key={i} className="py-5 px-6 text-center">
                          {included ? (
                            <FiCheckCircle className="inline text-[#8F49AA] text-2xl" />
                          ) : (
                            <FiXCircle className="inline text-red-500 text-2xl" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Providers & Drugs */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiUser className="text-[#8F49AA] text-3xl" />
                <h3 className="text-2xl font-bold text-[#442364]">Your Healthcare Providers</h3>
              </div>
              <div className="flex items-center gap-3 text-red-600 mb-5 text-lg">
                <FiXCircle className="text-2xl" />
                <span>0 of 1 Healthcare Providers covered</span>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-[#8F49AA] text-[#8F49AA] font-medium rounded-lg hover:bg-[#8F49AA]/10 transition-colors">
                Edit Providers
                <FiChevronDown />
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow border border-gray-200 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FiPlusCircle className="text-[#8F49AA] text-3xl" />
                <h3 className="text-2xl font-bold text-[#442364]">Your Rx Drugs</h3>
              </div>
              <button className="w-full py-5 px-6 bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-xl font-medium text-lg transition-colors">
                Add Rx Drugs
              </button>
            </div>
          </section>

          {/* Documents */}
          <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FiFileText className="text-[#8F49AA] text-3xl" />
              <h3 className="text-2xl font-bold text-[#442364]">Plan Documents</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filledPlans.map((plan, idx) => (
                <div key={idx} className="space-y-4">
                  {documents.map((doc) => (
                    <button
                      key={doc.label}
                      className="w-full flex items-center justify-between gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#8F49AA]/10 flex items-center justify-center flex-shrink-0">
                          <FiFileText className="text-[#8F49AA] text-2xl" />
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-gray-900 group-hover:text-[#8F49AA] transition-colors">
                            {doc.label}
                          </p>
                          <p className="text-sm text-gray-500">{doc.hint}</p>
                        </div>
                      </div>
                      <FiChevronDown className="text-gray-500 group-hover:text-[#8F49AA] transition-colors" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
          <button
            onClick={() => navigate('/plans')}
            className="bg-[#8F49AA] hover:bg-[#7a3e8f] active:bg-[#6a357d] text-white font-bold text-xl px-12 py-5 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-100 duration-200"
          >
            Return to Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compare;