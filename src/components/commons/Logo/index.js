import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const LogoWrapper = styled.div`
    font-family: Fira Sans Condensed;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => get(theme, `colors.secondary.main.contrastText`)};

    ${breakpointsMedia({
    xs: css`
        font-size: 18px;
        line-height: 22px;
        padding-left: 18px;
        padding-right: 17.73px;
        padding-top: 9px;
        padding-bottom: 9px;
        `,
    md: css`
        font-size: 38px;
        line-height: 45.6px;
        padding-left: 19px;
        padding-right: 19px;
        padding-top: 11px;
        padding-bottom: 10px;
        `,
    })}
`

export function Logo(){
    return (
        <LogoWrapper>Eu</LogoWrapper>
    )
}