import React from 'react';
// material ui components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
            return <CompareQuote quote={quote} flex={1} />;
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
                <Grid container direction="row">
                    <Grid item md={4} xs={12}></Grid>
                    <Grid item md={8} xs={12}>
                        <Box display="flex" flexDirection="row">
                            {compareItems.map((quote) =>
                                renderCompareQuote(quote)
                            )}
                        </Box>
                    </Grid>
                </Grid>
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
