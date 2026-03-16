export const plans = [
    {
        id: 'H7464_012_0',
        type: 'Medicare Advantage',
        name: 'UHC Complete Care NY-33 (HMO-POS C-SNP)',
        planId: 'H3379-055',
        premium: '$0',
        rating: 3.5,
        benefits: [
            { name: 'Rx Drugs', covered: true },
            { name: 'Dental', covered: true },
            { name: 'Vision', covered: true },
            { name: 'Hearing', covered: true },
            { name: 'OTC', covered: true },
            { name: 'Transportation', covered: false }
        ],
        missingBenefits: ['Transportation'],
        carrierLogo: 'https://3dapi.nbsk.top/uploads/2026-03-13_08-35-12_2.7942.png',
        costs: {
            monthlyPremium: '$0',
            maxOutOfPocketInNetwork: '$6,700',
            maxOutOfPocketCombined: 'Not Applicable',
            annualRxDeductible: '$445',
            annualRxDeductibleNote: '(except no deductible applies to: Preferred Generic and Generic)',
            annualMedicalDeductible: '$0',
        },
        visits: [
            { label: 'Primary Doctor Visit Copay (In-network)', value: '$0' },
            { label: 'Specialist Visit Copay (In-network)', value: '$0 - $35' },
            { label: 'Acute Hospitalization Copay (Inpatient)', value: '$450 per day for days 1-5\n$0 per day for days 6 and beyond.\nThis plan covers an unlimited number of days in an inpatient acute hospital stay.' },
            { label: 'Psychiatric Hospitalization Copay (Inpatient)', value: '$450 per day for days 1-5\n$0 per day for days 6-90' },
            { label: 'Emergency Room Copay', value: '$110\nCopay is waived if admitted to the hospital within 24 hours.' },
        ],
        rxDrugs: [], // Table for added drugs
        rxTiers: [
            { name: '1 - Preferred Generic', preferredRetail: 'N/A', standardRetail: '$0 / N/A / $0', preferredMail: 'N/A / N/A / $0', standardMail: 'N/A / N/A / $30', specialtyMail: 'N/A' },
            { name: '2 - Generic', preferredRetail: 'N/A', standardRetail: '$12 / N/A / $36', preferredMail: 'N/A / N/A / $0', standardMail: 'N/A / N/A / $36', specialtyMail: 'N/A' },
            { name: '3 - Preferred Brand', preferredRetail: 'N/A', standardRetail: '$47 / N/A / 19%', preferredMail: 'N/A / N/A / 19%', standardMail: 'N/A / N/A / 19%', specialtyMail: 'N/A' },
            { name: '4 - Non-Preferred Drug', preferredRetail: 'N/A', standardRetail: '$47 / N/A / N/A', preferredMail: '42% / N/A / N/A', standardMail: '42% / N/A / N/A', specialtyMail: 'N/A' },
            { name: '5 - Specialty Tier', preferredRetail: 'N/A', standardRetail: '31% / N/A / N/A', preferredMail: '31% / N/A / N/A', standardMail: '31% / N/A / N/A', specialtyMail: 'N/A' },
        ],
        importantMessages: [
            {
                title: 'Important Message About What You Pay for Insulin',
                content: 'For Medicare plans with prescription drug coverage, you won\'t pay more than $35 for a one-month (up to 30-day) supply of each covered Part D insulin product.'
            },
            {
                title: 'Important Message About What You Pay for Vaccines',
                content: 'This plan covers most Part D vaccines at no cost to you. For plans that have a Part D deductible this also applies, even if you haven\'t paid your deductible. Call Member Services for more information.'
            }
        ],
        documents: [
            { name: 'Summary of Benefits', url: '#' },
            { name: 'Evidence of Coverage', url: '#' },
            { name: 'Star Ratings', url: '#' },
        ]
    },
    {
        id: 'H7464_008_2',
        type: 'Medicare Advantage',
        name: 'UHC Dual Complete MD-S002 (HMO D-SNP)',
        planId: 'H7464-008-2',
        premium: '$0',
        rating: 3.5,
        benefits: [
            { name: 'Rx Drugs', covered: true },
            { name: 'Vision', covered: true },
            { name: 'Hearing', covered: true },
            { name: 'OTC', covered: true },
            { name: 'Transportation', covered: true },
            { name: 'Dental', covered: false }
        ],
        missingBenefits: ['Dental'],
        carrierLogo: 'https://3dapi.nbsk.top/uploads/2026-03-13_08-35-12_2.7942.png',
        costs: {
            monthlyPremium: '$0',
            maxOutOfPocketInNetwork: '$9,250',
            maxOutOfPocketCombined: 'Not Applicable',
            annualRxDeductible: '$0',
            annualRxDeductibleNote: 'Not Applicable',
            annualMedicalDeductible: '$0',
        },
        visits: [
            { label: 'Primary Care Physician', value: '$0 copay' },
            { label: 'Specialist', value: '$0 copay' },
            { label: 'Emergency Room', value: '$0 copay' },
            { label: 'Inpatient Hospital Stay', value: '$0 copay' },
        ]
    },
    {
        id: 'H2172_017_0',
        type: 'Medicare Advantage',
        name: 'Kaiser Permanente Dual Complete Plan 2 MD (HMO D-SNP)',
        planId: 'H2172-017',
        premium: '$0',
        rating: 4.5,
        benefits: [
            { name: 'Rx Drugs', covered: true },
            { name: 'Dental', covered: true },
            { name: 'Vision', covered: true },
            { name: 'Hearing', covered: true },
            { name: 'OTC', covered: true },
            { name: 'Transportation', covered: true }
        ],
        missingBenefits: [],
        carrierLogo: 'https://3dapi.nbsk.top/uploads/2026-03-13_08-35-12_2.7942.png',
        costs: {
            monthlyPremium: '$0',
            maxOutOfPocketInNetwork: '$9,250',
            maxOutOfPocketCombined: 'Not Applicable',
            annualRxDeductible: '$0',
            annualRxDeductibleNote: 'Not Applicable',
            annualMedicalDeductible: '$0',
        },
        visits: [
            { label: 'Primary Care Physician', value: '$0 copay' },
            { label: 'Specialist', value: '$0 copay' },
            { label: 'Emergency Room', value: '$0 copay' },
            { label: 'Inpatient Hospital Stay', value: '$0 copay' },
        ]
    }
];
