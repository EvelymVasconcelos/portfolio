import React from 'react';
import styled, {css}  from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const TextStyleVariantsMap = {
    titleXS: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.titleXS.fontSize};
            font-weight: ${theme.typographyVariants.titleXS.fontWeight};
            line-height: ${theme.typographyVariants.titleXS.lineHeight};
        `}
    `,
    title: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.title.fontSize};
            font-weight: ${theme.typographyVariants.title.fontWeight};
            line-height: ${theme.typographyVariants.title.lineHeight};
        `}
    `,
    subTitle: css`
        text-transform: capitalize;
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.subTitle.fontSize};
            font-weight: ${theme.typographyVariants.subTitle.fontWeight};
            line-height: ${theme.typographyVariants.subTitle.lineHeight};
        `}
    `,
    menuXS: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.menuXS.fontSize};
            font-weight: ${theme.typographyVariants.menuXS.fontWeight};
            line-height: ${theme.typographyVariants.menuXS.lineHeight};
       `}
    `,
    menu: css`
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.menu.fontSize};
            font-weight: ${theme.typographyVariants.menu.fontWeight};
            line-height: ${theme.typographyVariants.menu.lineHeight};
    `}
    `,
    projectsXS: css`
        /* height: 43px; */
        text-align: center;
        text-transform: uppercase;
        font-style: normal;
        margin-top: 0;
        margin-bottom: 0;
        color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.projectsXS.fontSize};
            font-weight: ${theme.typographyVariants.projectsXS.fontWeight};
            line-height: ${theme.typographyVariants.projectsXS.lineHeight};
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
        /* text-align: center; */
        text-transform: capitalize;
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph1.fontSize};
            font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
            line-height: ${theme.typographyVariants.paragraph1.lineHeight};
        `}
    `,
    paragraph2: css`
        margin-top: 0;
        margin-bottom: 0;
        font-style: normal;
        ${breakpointsMedia({
        xs: css`
            color: transparent;
            
            `,
        md: css`
            color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
            /* margin-top: 30px;
            margin-right: 30px; */
            `,
        })}
        ${({ theme }) => css`
            font-size: ${theme.typographyVariants.paragraph2.fontSize};
            font-weight: ${theme.typographyVariants.paragraph2.fontWeight};
            line-height: ${theme.typographyVariants.paragraph2.lineHeight};
        `}
    `,
}

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
    margin-top: 0;
    margin-bottom: 0;
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
    variant: PropTypes.oneOf(['paragraph1', 'title', 'subTitle', 'menuXS', 'menu', 'projects', 'titleXS', 'projectsXS', 'paragraph2']),
};