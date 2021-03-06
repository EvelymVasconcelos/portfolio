import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get';

const LogoWrapper = styled.div`
    width: 47px;
    height: 22px;
    padding-left: 18px;
    padding-right: 17.73px;
    padding-top: 9px;
    padding-bottom: 9px;
    font-family: Fira Sans Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => get(theme, `colors.secondary.main.contrastText`)};
`

export function Logo(){
    return (
        <LogoWrapper>Eu</LogoWrapper>
    )
}