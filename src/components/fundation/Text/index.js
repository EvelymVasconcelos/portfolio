import React from 'react';
import styled, {css}  from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';

export const TextStyleVariantsMap = {
    title: css`
        height: 154px;
        margin-top: 0;
        margin-bottom: 0;
        text-transform: uppercase; 
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.title.fontSize};
            font-weight: ${theme.typographyVariants.title.fontWeight};
            line-height: ${theme.typographyVariants.title.lineHeight};
        `}
    `,
    subTitle: css`
        height: 58px;
        margin-top: 0;
        margin-bottom: 0;
        text-transform: capitalize;
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.subTitle.fontSize};
            font-weight: ${theme.typographyVariants.subTitle.fontWeight};
            line-height: ${theme.typographyVariants.subTitle.lineHeight};
        `}
    `,
    menu1: css`
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
        text-align: center;
        text-transform: capitalize;
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.menu1.fontSize};
            font-weight: ${theme.typographyVariants.menu1.fontWeight};
            line-height: ${theme.typographyVariants.menu1.lineHeight};
       `}
    `,
    projects: css`
        /* height: 43px; */
        text-align: center;
        text-transform: uppercase;
        font-style: normal;
        margin-top: 0;
        margin-bottom: 0;
        color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.projects.fontSize};
            font-weight: ${theme.typographyVariants.projects.fontWeight};
            line-height: ${theme.typographyVariants.projects.lineHeight};
        `}
    `,
    paragraph1: css`
        margin-top: 0;
        margin-bottom: 0;
        font-style: normal;
        text-align: center;
        text-transform: capitalize;
        color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph1.fontSize};
            font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
            line-height: ${theme.typographyVariants.paragraph1.lineHeight};
        `}
    `,
}

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
`;



export default function Text({tag, variant, children}){
    return(
        <TextBase
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
  };
  
Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'title', 'subTitle', 'menu1', 'projects']),
};