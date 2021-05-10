import React from 'react';
import PropTypes from 'prop-types';
import {
    Typography as MaterialTypography,
    useTheme,
    Box
} from '@material-ui/core';
import styled from 'styled-components';
import { AVAILABLE_TEXT_COLORS } from 'common/constant/index';

const TypographyContainer = styled(MaterialTypography)`
    color: ${(props) => props.textcolor};
    font-style: ${(props) => (props.italic === 'true' ? 'italic' : 'unset')};
    text-decoration: ${(props) =>
        props.decoration !== 'null' ? props.decoration : 'none'};
    word-break: ${(props) => (props.wordbreak ? props.wordbreak : 'unset')};
`;

const Typography = ({
    children,
    color = 'primary',
    italic = false,
    decoration = 'null',
    wordBreak,
    fontWeight,
    fontSize,
    lineHeight,
    ...props
}) => {
    // use themes
    const theme = useTheme();
    const fontProps = {};

    if (fontWeight) fontProps['fontWeight'] = fontWeight;
    if (fontSize) fontProps['fontSize'] = fontSize;
    if (lineHeight) fontProps['lineHeight'] = lineHeight;
    if (wordBreak) props['wordbreak'] = wordBreak;

    return (
        <TypographyContainer
            italic={italic.toString()}
            textcolor={theme.palette.text[color]} // this should be lowercase if not, browser warnings.
            decoration={decoration.toString()}
            {...props}>
            <Box {...fontProps}>{children}</Box>
        </TypographyContainer>
    );
};

Typography.propTypes = {
    color: PropTypes.oneOf(AVAILABLE_TEXT_COLORS), // colors that this component supports
    italic: PropTypes.bool // italic
};
export default Typography;
