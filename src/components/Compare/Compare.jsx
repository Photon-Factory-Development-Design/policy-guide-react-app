import React from 'react';
// material ui components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
// core component
import CompareQuote from 'components/Compare/CompareQuote';
import CompareItem from 'components/Compare/CompareItem';
// constant
import { getProxy } from 'containers/SuppResultItem/proxy';
import { detail_infos, PLAN_DETAILS } from 'common/data/plans';
import ComparePlanItem from 'components/Compare/ComparePlanItem';

const Compare = ({ compareItems, onHideCompare }) => {
    const renderCompareQuote = React.useCallback(
        (quote) => {
            return <CompareQuote quote={quote} />;
        },
        [compareItems]
    );

    const monthlyPremiumCompareItems = React.useCallback(() => {
        return compareItems.map((quote) => getProxy(quote)['MONTHLY_RATE']);
    }, [compareItems]);

    return (
        <Container>
            <Box>
                <Button onClick={onHideCompare} variant="text">
                    Go Back
                </Button>
                <Box display="flex" flexDirection="row" justifyContent="center">
                    {compareItems.map((quote) => renderCompareQuote(quote))}
                </Box>
                <Box>
                    <CompareItem
                        label="Monthly Premium"
                        items={monthlyPremiumCompareItems()}
                    />
                    {detail_infos.map((info) => (
                        <ComparePlanItem
                            detailInfo={info}
                            plans={compareItems.map(
                                (item) => PLAN_DETAILS[getProxy(item)['PLAN']]
                            )}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
};

export default Compare;
