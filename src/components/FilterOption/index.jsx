import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    Box,
    Checkbox
} from '@material-ui/core';
import { Typography } from 'components';

const FilterOption = ({
    title,
    filter,
    setFilter,
    filterItems,
    totalLength,
    renderer
}) => {
    // on change for filter parm
    const onChange = (value) => {
        if (value === 'ALL' && !filter[value]) {
            setFilter({ ALL: true });
        } else {
            filter[value] = !filter[value];
            if (
                Object.keys(filter).filter((key) => filter[key] === true)
                    .length === 0
            ) {
                setFilter({ ALL: true });
            } else {
                setFilter((prev) => ({
                    ...prev,
                    ALL: false
                }));
            }
        }
    };

    return (
        <Accordion>
            <AccordionSummary>
                <Typography variant="h6">{title} </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box display="flex" flexDirection="column">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!!filter['ALL']}
                                onChange={() => onChange('ALL')}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={`All Carriers(${totalLength})`}
                    />
                    {Object.keys(filterItems).map((key) => (
                        <FormControlLabel
                            key={key}
                            control={
                                <Checkbox
                                    checked={!!filter[key]}
                                    onChange={() => onChange(key)}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={renderer(filterItems[key])}
                        />
                    ))}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default FilterOption;
