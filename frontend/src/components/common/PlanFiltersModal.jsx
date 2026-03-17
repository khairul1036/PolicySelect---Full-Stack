import React, { useMemo, useState } from 'react';
import { FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';

const FILTER_GROUPS = [
  {
    key: 'planType',
    title: 'Plan Type',
    expandable: false,
    options: [
      { id: 'c-snp', label: 'C-SNP (Chronic Condition Special Needs)', count: 0 },
      { id: 'd-snp', label: 'D-SNP (Dual Eligible Special Needs)', count: 4 },
      { id: 'hmo', label: 'HMO Plan (Health Maintenance Organization)', count: 7 },
      { id: 'pffs', label: 'PFFS (Private Fee-for-Service)', count: 0 },
      { id: 'ppo', label: 'PPO Plan (Preferred Provider Organization)', count: 0 },
    ],
  },
  {
    key: 'carrierName',
    title: 'Carrier Name',
    expandable: false,
    options: [
      { id: 'uhc', label: 'UnitedHealthcare Insurance Company', count: 4 },
      { id: 'wellpoint', label: 'Wellpoint', count: 3 },
    ],
  },
  {
    key: 'starRating',
    title: 'Star Rating',
    expandable: true,
    defaultVisibleCount: 3,
    options: [
      { id: '5-stars', label: '5 Stars (out of 5 stars)', count: 0 },
      { id: '4-stars', label: '4 Stars (out of 5 stars)', count: 2 },
      { id: '3-stars', label: '3 Stars (out of 5 stars)', count: 5 },
      { id: '2-stars', label: '2 Stars (out of 5 stars)', count: 0 },
      { id: '1-stars', label: '1 Star (out of 5 stars)', count: 0 },
    ],
  },
  {
    key: 'maxOutOfPocket',
    title: 'Max Out-of-Pocket',
    expandable: true,
    defaultVisibleCount: 3,
    options: [
      { id: 'na', label: 'Not Applicable', count: 0 },
      { id: 'below-2000', label: 'Below $2,000', count: 0 },
      { id: '2000-4000', label: '$2,000 - $4,000', count: 1 },
      { id: '4000-6000', label: '$4,001 - $6,000', count: 2 },
      { id: 'above-6000', label: 'Above $6,000', count: 4 },
    ],
  },
  {
    key: 'partDCoverage',
    title: 'Part D Coverage',
    expandable: false,
    options: [
      { id: 'with-partd', label: 'With Part D Coverage', count: 6 },
      { id: 'without-partd', label: 'Without Part D Coverage', count: 1 },
    ],
  },
];

const PlanFiltersModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedGroups, setExpandedGroups] = useState({
    starRating: false,
    maxOutOfPocket: false,
  });

  const selectedCount = useMemo(
    () => Object.keys(selectedFilters).length,
    [selectedFilters]
  );

  if (!isOpen) return null;

  const toggleOption = (groupKey, optionId) => {
    const key = `${groupKey}:${optionId}`;
    setSelectedFilters((prev) => {
      if (prev[key]) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: true };
    });
  };

  const toggleGroup = (groupKey) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupKey]: !prev[groupKey],
    }));
  };

  const clearAll = () => {
    setSelectedFilters({});
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(selectedFilters);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/35 backdrop-blur-sm z-60 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-115 h-[88vh] max-h-190 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        <div className="border-b border-gray-200 px-5 py-4 relative shrink-0">
          <h2 className="text-center text-base font-medium text-gray-900">Filters</h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-900"
            aria-label="Close filters"
          >
            <FiX size={26} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {FILTER_GROUPS.map((group, groupIndex) => {
            const isExpanded = !!expandedGroups[group.key];
            const visibleCount = group.expandable && !isExpanded
              ? group.defaultVisibleCount || group.options.length
              : group.options.length;
            const visibleOptions = group.options.slice(0, visibleCount);

            return (
              <section
                key={group.key}
                className={groupIndex !== FILTER_GROUPS.length - 1 ? 'border-b border-gray-200 pb-7 mb-7' : ''}
              >
                <h3 className="text-[2rem] leading-none mb-5 text-gray-900 font-normal">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {visibleOptions.map((option) => {
                    const key = `${group.key}:${option.id}`;
                    const checked = !!selectedFilters[key];

                    return (
                      <label key={option.id} className="flex items-center justify-between gap-3 cursor-pointer select-none">
                        <span className="text-sm text-gray-700">
                          {option.label} ({option.count})
                        </span>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleOption(group.key, option.id)}
                          className="w-5 h-5 rounded border-gray-300 text-[#8F49AA] focus:ring-[#8F49AA]"
                        />
                      </label>
                    );
                  })}
                </div>

                {group.expandable && group.options.length > (group.defaultVisibleCount || 0) && (
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.key)}
                    className="mt-4 text-sm text-gray-700 hover:text-gray-900 underline underline-offset-2 inline-flex items-center gap-2"
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    {isExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                  </button>
                )}
              </section>
            );
          })}
        </div>

        <div className="border-t border-gray-200 px-5 py-4 bg-white shrink-0">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={clearAll}
              className="text-lg leading-none font-semibold text-[#1A1A1A] hover:text-black box-border border border-gray-300 px-7 py-3 rounded-md transition-colors cursor-pointer "
            >
              Clear All Filters
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-[#1991E6] hover:bg-[#0f7fcf] text-white font-semibold px-7 py-3 rounded-md transition-colors"
            >
              Show Plans{selectedCount ? ` (${selectedCount})` : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanFiltersModal;