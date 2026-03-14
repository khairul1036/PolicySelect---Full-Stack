import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { plans } from "../../data/plans";

// ============================================================
// PLAN DETAILS COMPONENT
// Usage: <PlanDetails /> (Dynamic route component)
// ============================================================

export default function PlanDetails() {
  const { planId } = useParams();
  const navigate = useNavigate();

  // Find the plan based on the URL parameter
  const plan = useMemo(() => {
    return plans.find((p) => p.id === planId) || null;
  }, [planId]);

  // Default empty plan structure for safety
  const defaultPlan = {
    id: "",
    name: "",
    planId: "",
    type: "Medicare Advantage",
    rating: 0,
    logo: "",
    costs: {
      monthlyPremium: "$0",
      maxOutOfPocketInNetwork: "$0",
      maxOutOfPocketCombined: "Not Applicable",
      annualRxDeductible: "$0",
      annualRxDeductibleNote: "",
      annualMedicalDeductible: "$0",
    },
    benefits: [],
    visits: [],
    rxTiers: [],
    documents: [],
    rxMessages: [],
  };

  if (!plan) {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Plan Not Found</h2>
        <button
          onClick={() => navigate("/plans")}
          className="mt-4 text-[#1a365d] font-semibold hover:underline"
        >
          Return to Plans
        </button>
      </div>
    );
  }

  const data = { ...defaultPlan, ...plan };

  const handleBack = () => {
    navigate("/plans");
  };

  const handleEnroll = () => {
    // Implement enrollment logic or call
    alert("Call to Enroll functionality coming soon!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white my-8 rounded-xl shadow-sm border border-gray-100">
      {/* Plan Header */}
      <PlanHeader plan={data} />

      {/* Accordion Sections */}
      <div className="mt-6 space-y-4">
        <Section title="Plan Costs" icon={<WalletIcon />} defaultOpen>
          <PlanCostsContent costs={data.costs} />
        </Section>

        <Section title="Benefits" icon={<BenefitsIcon />} defaultOpen>
          <BenefitsContent benefits={data.benefits} />
        </Section>

        <Section title="Your Healthcare Providers" icon={<ProvidersIcon />}>
          <AddButton label="Add Healthcare Providers" />
        </Section>

        <Section title="Your Rx Drugs" icon={<RxIcon />}>
          <AddButton label="Add Rx Drugs" />
        </Section>

        <Section title="Office, Hospitalizations & Emergency Visits" icon={<HospitalIcon />} defaultOpen>
          <VisitsContent visits={data.visits} />
        </Section>

        <Section title="Rx Drug Coverage & Costs" icon={<PillIcon />} defaultOpen>
          <RxCoverageContent plan={data} />
        </Section>

        <Section title="Plan Documents" icon={<DocumentIcon />} defaultOpen>
          <DocumentsContent documents={data.documents} />
        </Section>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleBack}
          className="text-[#1a365d] font-semibold hover:underline"
        >
          Back to Plans
        </button>
        <button
          onClick={handleEnroll}
          className="bg-[#e58e26] hover:bg-[#d17f1e] text-white font-semibold px-8 py-3 rounded-md"
        >
          Call to Enroll
        </button>
      </div>
    </div>
  );
}

// ============================================================
// PLAN HEADER
// ============================================================
function PlanHeader({ plan }) {
  const logo = plan.carrierLogo || plan.logo;
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      {/* Logo */}
      {logo && (
        <div className="w-16 h-16 border border-gray-200 rounded flex items-center justify-center bg-white shrink-0">
          <img src={logo} alt={plan.name} className="max-w-full max-h-full object-contain" />
        </div>
      )}

      <div className="flex-1">
        {/* Badge */}
        <span className="inline-block bg-[#2563eb] text-white text-xs font-semibold px-2 py-1 rounded mb-2">
          {plan.type}
        </span>

        {/* Plan Name */}
        <h1 className="text-xl md:text-2xl font-bold text-[#1a365d]">{plan.name}</h1>

        {/* Plan ID */}
        <p className="text-sm text-gray-500">Plan ID: {plan.planId}</p>

        {/* Rating */}
        {plan.rating > 0 && (
          <div className="flex items-center gap-1 mt-1">
            <StarIcon className="w-4 h-4 text-[#e58e26] fill-[#e58e26]" />
            <span className="text-sm text-gray-700">{plan.rating} out of 5</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// ACCORDION SECTION
// ============================================================
function Section({ title, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#1a365d]">{icon}</span>
          <span className="font-semibold text-[#1a365d]">{title}</span>
        </div>
        <ChevronIcon className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="p-4 pt-0 border-t border-gray-100">{children}</div>}
    </div>
  );
}

// ============================================================
// SECTION CONTENTS
// ============================================================
function PlanCostsContent({ costs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      <CostField label="Monthly Premium" value={costs.monthlyPremium} />
      <div />
      <CostField label="Max-Out-of-Pocket (In-network)" value={costs.maxOutOfPocketInNetwork} />
      <CostField label="Max-Out-of-Pocket (Combined)" value={costs.maxOutOfPocketCombined} />
      <CostField
        label="Annual Rx Drug Deductible"
        value={costs.annualRxDeductible}
        note={costs.annualRxDeductibleNote}
      />
      <CostField label="Annual Medical Deductible" value={costs.annualMedicalDeductible} />
    </div>
  );
}

function CostField({ label, value, note }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="text-sm text-gray-600">{value}</p>
      {note && <p className="text-xs text-gray-500 mt-1">{note}</p>}
    </div>
  );
}

function BenefitsContent({ benefits }) {
  if (!benefits || benefits.length === 0) {
    return <p className="text-sm text-gray-500 pt-4">No benefits information available.</p>;
  }

  return (
    <div className="pt-4">
      <p className="text-sm text-gray-600 mb-3">
        {benefits.filter((b) => b.covered).length} of {benefits.length} Benefits covered
      </p>
      <div className="grid grid-cols-2 gap-2">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${benefit.covered ? "bg-[#2563eb]" : "bg-gray-300"}`} />
            <span className="text-sm text-gray-700">{benefit.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisitsContent({ visits }) {
  if (!visits || visits.length === 0) {
    return <p className="text-sm text-gray-500 pt-4">No visit information available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
      {visits.map((visit, idx) => (
        <div key={idx}>
          <p className="text-sm font-semibold text-gray-900 mb-1">{visit.label}</p>
          <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
            {visit.value}
          </div>
          {visit.note && <p className="text-xs text-gray-500 mt-1">{visit.note}</p>}
        </div>
      ))}
    </div>
  );
}

function RxCoverageContent({ plan }) {
  const { rxTiers, importantMessages, rxDrugs } = plan;
  return (
    <div className="pt-4 space-y-6">
      {/* Rx Drugs Name Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-y border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Rx Drug Name</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Tier</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Prior Authorization</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantity Limits</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Step Therapy</th>
            </tr>
          </thead>
          <tbody>
            {rxDrugs && rxDrugs.length > 0 ? (
              rxDrugs.map((drug, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-700">{drug.name}</td>
                  <td className="py-3 px-4 text-gray-700">{drug.tier}</td>
                  <td className="py-3 px-4 text-gray-700">{drug.priorAuth}</td>
                  <td className="py-3 px-4 text-gray-700">{drug.quantityLimits}</td>
                  <td className="py-3 px-4 text-gray-700">{drug.stepTherapy}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4">
                  <AddButton label="Add Rx Drugs" />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Important Messages */}
      {importantMessages && importantMessages.length > 0 && (
        <div className="space-y-3">
          {importantMessages.map((msg, idx) => (
            <ExpandableMessage key={idx} title={msg.title} content={msg.content} />
          ))}
        </div>
      )}

      {/* Rx Tiers Table */}
      {rxTiers && rxTiers.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-t border-gray-200">
                <th rowSpan="2" className="text-left py-4 px-3 font-semibold text-gray-700 border-b border-gray-200">Rx Drug Tier</th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 border-b border-gray-100">Preferred Retail</th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 border-b border-gray-100">Standard Retail</th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 border-b border-gray-100">Preferred Mail Order</th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 border-b border-gray-100">Standard Mail Order</th>
                <th className="text-center py-2 px-2 font-semibold text-gray-700 border-b border-gray-100">Specialty Mail Order</th>
              </tr>
              <tr className="border-b border-gray-200 text-xs text-gray-500">
                <td className="text-center py-2">1 / 2 / 3 mo.</td>
                <td className="text-center py-2">1 / 2 / 3 mo.</td>
                <td className="text-center py-2">1 / 2 / 3 mo.</td>
                <td className="text-center py-2">1 / 2 / 3 mo.</td>
                <td className="text-center py-2">1 / 2 / 3 mo.</td>
              </tr>
            </thead>
            <tbody>
              {rxTiers.map((tier, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-4 px-3 text-gray-700 font-medium">{tier.name}</td>
                  <td className="py-4 px-2 text-center text-gray-600">{tier.preferredRetail}</td>
                  <td className="py-4 px-2 text-center text-gray-600">{tier.standardRetail}</td>
                  <td className="py-4 px-2 text-center text-gray-600">{tier.preferredMail}</td>
                  <td className="py-4 px-2 text-center text-gray-600">{tier.standardMail}</td>
                  <td className="py-4 px-2 text-center text-gray-600">{tier.specialtyMail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function DocumentsContent({ documents }) {
  if (!documents || documents.length === 0) {
    return <p className="text-sm text-gray-500 pt-4">No documents available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      {documents.map((doc, idx) => (
        <a
          key={idx}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
        >
          <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center">
            <PdfIcon className="w-5 h-5 text-red-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{doc.name}</p>
            <p className="text-xs text-gray-500">(PDF)</p>
          </div>
          <DownloadIcon className="w-5 h-5 text-gray-400" />
        </a>
      ))}
    </div>
  );
}

// ============================================================
// HELPER COMPONENTS
// ============================================================
function AddButton({ label }) {
  return (
    <button className="w-full border border-dashed border-gray-300 rounded-lg py-3 text-sm text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center gap-2">
      <PlusIcon className="w-4 h-4" />
      {label}
    </button>
  );
}

function ExpandableMessage({ title, content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-l-4 border-[#e58e26] bg-orange-50 p-3 rounded-r">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-sm font-semibold text-gray-900">{title}</span>
        <ChevronIcon className={`w-4 h-4 text-gray-500 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && <p className="text-sm text-gray-600 mt-2">{content}</p>}
    </div>
  );
}

// ============================================================
// ICONS (inline SVG for portability)
// ============================================================
function WalletIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function BenefitsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ProvidersIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function RxIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  );
}

function HospitalIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 v5m-4 0h4" />
    </svg>
  );
}

function PillIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ChevronIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PlusIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  );
}

function PdfIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13H10v4H8.5v-4zm2.5 0h1.5l1 2.5 1-2.5H16v4h-1v-2.5l-.75 1.75h-.5L13 14.5V17h-1v-4z" />
    </svg>
  );
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}
