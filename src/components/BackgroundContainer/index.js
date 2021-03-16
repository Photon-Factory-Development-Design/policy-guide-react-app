import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core';
import { AVAILABLE_COLORS } from '../../common/constant';

const StyledContainer = styled.div.attrs((props) => ({
    className: `py-${props.vertical} pt-${props.verticalTop} pb-${props.verticalBottom} 
            my-${props.marginVertical} mt-${props.marginVerticalTop} mb-${props.marginVerticalBottom}`
}))`
    background-color: ${(props) => props.color};
`;
const BackgroundContainer = React.forwardRef(
    (
        {
            color,
            children,
            vertical,
            verticalTop,
            verticalBottom,
            marginVertical,
            marginVerticalTop,
            marginVerticalBottom
        },
        ref
    ) => {
        const theme = useTheme();

        return (
            <StyledContainer
                ref={ref}
                color={theme.palette.background[color]}
                marginVertical={marginVertical}
                marginVerticalTop={marginVerticalTop}
                marginVerticalBottom={marginVerticalBottom}
                vertical={vertical}
                verticalTop={verticalTop}
                verticalBottom={verticalBottom}>
                {children}
            </StyledContainer>
        );
    }
);

BackgroundContainer.propTypes = {
    // Backround color
    color: PropTypes.oneOf(AVAILABLE_COLORS).isRequired,
    // vertical space nums
    vertical: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    verticalTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    verticalBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    // margin vertical space nums
    marginVertical: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    marginVerticalTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    marginVerticalBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
};

export default BackgroundContainer;
