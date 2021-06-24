import React from 'react';
import clsx from 'clsx';
import { Collapse, FormControlLabel, Box, Checkbox } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { Typography } from 'components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// jss
import styles from './filterOptionStyle';

const FilterOption = ({
    title,
    filter,
    setFilter,
    filterItems,
    totalLength,
    renderer,
    classes
}) => {
    const [opened, setOpened] = React.useState(false);

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

    const caretClassName = clsx(classes.caret, opened && 'active');

    return (
        <Box>
            <Box
                onClick={() => setOpened((prev) => !prev)}
                display="flex"
                flexDirection="row"
                className={classes.anchor}
                alignItems="center">
                <Typography variant="h6">{title} </Typography>{' '}
                <ExpandMoreIcon className={caretClassName} />
            </Box>
            <Collapse in={opened}>
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
            </Collapse>
        </Box>
    );
};

export default withStyles(styles)(FilterOption);
