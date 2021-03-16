import React from 'react';
import styled from 'styled-components';
import { CardHeader as MUICardHeader, useTheme } from '@material-ui/core';

const StyledMUICardHeader = styled(MUICardHeader)`
    background-color: ${(props) => props.color};
`;

const CardHeader = ({ color, ...props }) => {
    const theme = useTheme();

    return (
        <StyledMUICardHeader
            {...props}
            color={theme.palette.background[color]}
        />
    );
};

export default CardHeader;
