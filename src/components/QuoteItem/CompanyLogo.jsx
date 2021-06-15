import React from 'react';
import { base_url } from 'common/constant/index';

const getCompanyLogoPath = (companyName) =>
    `${base_url}/assets/company_logos/${companyName.replaceAll(' ', '_')}.jpg`;
const CompanyLogo = ({ companyName }) => {
    const [src, setSrc] = React.useState(getCompanyLogoPath(companyName));

    return (
        <img
            src={src}
            alt="logo"
            onError={() =>
                setSrc(
                    'https://static.ehealthmedicareplans.com//ehealthinsurance/CarrierProfile/logos/HumanaMedicare.gif'
                )
            }
        />
    );
};

export default CompanyLogo;
