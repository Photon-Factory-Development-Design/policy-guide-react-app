// import React from 'react';

export const detail_infos = [
    {
        label: 'Annual Deductible',
        field: 'annual_deductible',
        fn: (value) => {
            if (Array.isArray(value))
                return value
                    .map((item) => `${item.label}:${item.value}`)
                    .join(' ');
            else return value;
        }
    },
    { label: 'Doctor/Hospital Choice', field: 'doctor_hospital_choice' },
    { label: 'Office Visit', field: 'office_visit' },
    { label: 'Out-of-Pocket Max', field: 'out_of_pocket_max' },
    {
        label: 'Prescription Drug Coverage',
        field: 'prescription_drug_coverage'
    },
    { label: 'Preventive Care', field: 'preventive_care' },
    { label: 'Emergency Room', field: 'emergency_room' },
    { label: 'Ambulance Services', field: 'ambulance_services' },
    { label: 'Urgent Care', field: 'urgent_care' },
    { label: 'Outpatient Lab/X-Ray', field: 'outpatient_lab_x_ray' },
    { label: 'Outpatient Surgery', field: 'outpatient_surgery' },
    {
        label: 'Inpatient Hospital Coverage',
        field: 'inpatient_hospital_coverage'
    },
    {
        label: 'Outpatient Rehabilitation Services',
        field: 'outpatient_rehabilitation_services'
    },
    {
        label: 'Skilled Nursing Facilities',
        field: 'skilled_nursing_facilities'
    },
    { label: 'Home Health Care', field: 'home_health_care' }
];

export const quote_infos = [
    {
        label: 'Monthly Premium',
        field: 'MONTHLY_RATE',
        fn: (value) => `$${value}/mo`
    }
];

export const PLAN_DETAILS = {
    A: {
        features: ['Dental ', 'Vision', 'Hearing', 'Fitness Benefits'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 1000
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No charge after Part B deductible',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No charge after Part B deductible',
        ambulance_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge after Part B deductible',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge after Part A Deductible per benefit period for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days'
        ],
        outpatient_rehabilitation_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        skilled_nursing_facilities: [
            'No charge for days 1-20;',
            'Up to $92.75 a day for days 21-100;',
            'all costs for the 101st day and after.'
        ],
        home_health_care: [
            'No Charge for medically necessary skilled care services and medical supplies;',
            'Durable medical equipment subject to Part B deductible Plus 10%'
        ]
    },
    B: {
        features: ['Dental', 'Vision', 'Hearing', 'Fitness Benefits'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 0
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No charge after Part B deductible',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No charge after Part B deductible',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge after Part B deductible',
        // outpatient_lab_x_ray:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // outpatient_surgery:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days.'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    C: {
        features: [
            'Dental',
            'Vision',
            'Hearing',
            'Fitness Benefits',
            'Foreign Travel Emergency',
            'Skilled Nursing Facilities'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 0
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No Charge',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No Charge',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No Charge',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150;',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days.'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    D: {
        features: ['Plan D ', 'Part B Excess Charges', 'Part B Excess Charges'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 0
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit:
            'Any Doctor or medical provider that accepts Medicare patients',
        out_of_pocket_max: 6221,
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        ambulance_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            '$742 for Days 1-70;',
            'No charge for Days 61-90;'
        ],
        outpatient_rehabilitation_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        skilled_nursing_facilities: [
            'No charge for days 1-20;',
            'Up to $92.75 a day for days 21-100;',
            'all costs for the 101st day and after.'
        ],
        home_health_care: [
            'No Charge for medically necessary skilled care services and medical supplies;',
            'Durable medical equipment subject to Part B deductible Plus 10%'
        ]
    },
    F: {
        features: [
            'Part B Excess Charges',
            'Skilled Nursing Facilities',
            'Foreign Travel Emergency'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 0
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No charge',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No charge',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge',
        // outpatient_lab_x_ray:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // outpatient_surgery:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days.'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    HDF: {
        features: [
            'Part B Excess Charges',
            'Skilled Nursing Facilities',
            'Foreign Travel Emergency'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 2370
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patient',
        office_visit: 'No charge after Plan Deductible',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No charge after Plan Deductible',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge after Plan Deductible',
        // outpatient_lab_x_ray:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // outpatient_surgery:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge after plan deductible for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    HDG: {
        features: [
            'Part B Excess Charges ',
            'Skilled Nursing Facilities',
            'Foreign Travel Emergency'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 2370
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No charge after Plan Deductible',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            'No charge after Plan Deductible if Part B Deductible has been met',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care:
            'No charge after Plan Deductible if Part B Deductible has been met',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge after plan deductible for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365 days'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    G: {
        features: [
            'Part B Excess Charges',
            'Skilled Nursing Facilities',
            'Foreign Travel Emergency'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 0
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'No charge after Part B deductible',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room: 'No charge after Part B deductible',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge after Part B deductible',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    K: {
        features: [
            'Dental',
            'Vision',
            'Hearing',
            'Fitness Benefits',
            'Skilled Nursing Facilities'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        out_of_pocket_max: 6220,
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            '$742 for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (60 Lifetime Reserve days);',
            'No charge for Additional 365 days;',
            'All costs beyond the additional 365 days.'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    L: {
        features: [
            'Dental ',
            'Vision',
            'Hearing',
            'Fitness Benefits',
            'Skilled Nursing Facilities'
        ],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit:
            '5% after Part B Deductible until you reach Medicare approved amounts',
        out_of_pocket_max: 3100,
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            '5% after Part B Deductible until you reach Medicare approved amounts',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care:
            '5% after Part B Deductible until you reach Medicare approved amounts',
        // outpatient_lab_x_ray:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // outpatient_surgery:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            '$371 for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (60 Lifetime Reserve days);',
            'No charge for Additional 365 days;',
            'All costs beyond the additional 365 days'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    },
    M: {
        features: ['Plan M ', 'Part B Excess Charges'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 203
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit:
            'Any Doctor or medical provider that accepts Medicare patients',
        out_of_pocket_max: 6221,
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        ambulance_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_lab_x_ray:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        outpatient_surgery:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            '$742 for Days 1-70;',
            'No charge for Days 61-90;'
        ],
        outpatient_rehabilitation_services:
            '10% after Part B Deductible until you reach Medicare approved amounts.',
        skilled_nursing_facilities: [
            'No charge for days 1-20;',
            'Up to $92.75 a day for days 21-100;',
            'all costs for the 101st day and after.'
        ],
        home_health_care: [
            'No Charge for medically necessary skilled care services and medical supplies;',
            'Durable medical equipment subject to Part B deductible Plus 10%'
        ]
    },
    N: {
        features: ['Skilled Nursing Facilities', 'Foreign Travel Emergency'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 800
            }
        ],
        doctor_hospital_choice:
            'Any Doctor or medical provider that accepts Medicare patients',
        office_visit: 'After Part B Deductible, up to $20 for office visit',
        out_of_pocket_max: 'No Limit',
        prescription_drug_coverage: 'Not Covered',
        preventive_care: '$0 Copay',
        emergency_room:
            'After Part B deductible, up to $50 for emergency room visit. Emergency room copay is waived if admitted to hospital and visit is covered as Medicare Part A expense.',
        // ambulance_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        urgent_care: 'No charge after Part B deductible',
        // outpatient_lab_x_ray:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // outpatient_surgery:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        inpatient_hospital_coverage: [
            'No charge for Days 1-60;',
            'No charge for Days 61-90;',
            'No charge for Days 91-150 (Lifetime Reserve);',
            'No charge for Additional 365 days after reserve;',
            'All costs beyond the additional 365'
        ]
        // outpatient_rehabilitation_services:
        //     '10% after Part B Deductible until you reach Medicare approved amounts.',
        // skilled_nursing_facilities: [
        //     'No charge for days 1-20;',
        //     'Up to $92.75 a day for days 21-100;',
        //     'all costs for the 101st day and after.'
        // ],
        // home_health_care: [
        //     'No Charge for medically necessary skilled care services and medical supplies;',
        //     'Durable medical equipment subject to Part B deductible Plus 10%'
        // ]
    }
};
