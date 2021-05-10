import React from 'react';
import Box from '@material-ui/core/Box';

// core component
import { Typography } from 'components';

// proxy
import { getProxy } from 'containers/SuppResultItem/proxy';

const CompareQuote = ({ quote }) => {
    const proxy = React.useMemo(() => getProxy(quote), [quote]);

    return (
        <Box p={2}>
            <Typography variant="h1" fontSize="15px" fontWeight={500}>
                <a href="#">
                    {proxy['COMPANY_NAME'] || ''} Plan {proxy['PLAN']}
                </a>
            </Typography>
            <Box display="flex" flexDirection="row">
                <Typography variant="h1" fontSize="15px" fontWeight={900}>
                    From {proxy['MONTHLY_RATE']}{' '}
                </Typography>
                monthly premium
            </Box>
        </Box>
    );
};

export default CompareQuote;
