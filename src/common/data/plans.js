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
        features: ['Plan A feature', 'Part B Excess Charges'],
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
        office_visit:
            'Any Doctor or medical provider that accepts Medicare patients',
        out_of_pocket_max: 6220,
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
            '$742 for Days 1-60;',
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
    B: {
        features: ['Plan B feature', 'Skilled nursing facilities'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
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
            '$742 for Days 1-60;',
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
    C: {
        features: ['Plan C feature', 'Foreign Travel Emergency'],
        annual_deductible: [
            {
                label: 'Part A',
                value: 742
            },
            {
                label: 'Part B',
                value: 900
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
    D: {
        features: ['Plan D feature', 'Part B Excess Charges'],
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
        features: ['Plan F feature', 'Skilled nursing facilities'],
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
    HDF: {
        features: ['Plan HDF feature', 'Foreign Travel Emergency'],
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
    HDG: {
        features: ['Plan HDG feature', 'Foreign Travel Emergency'],
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
    G: {
        features: ['Plan G feature', 'Part B Excess Charges'],
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
    K: {
        features: ['Plan K feature', 'Foreign Travel Emergency'],
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
    L: {
        features: ['Plan L feature', 'Skilled nursing facilities'],
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
    M: {
        features: ['Plan M feature', 'Part B Excess Charges'],
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
        features: ['Plan N feature', 'Foreign Travel Emergency'],
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
    }
};
