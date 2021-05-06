import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get';

const SectionTitleWrapper = styled.p`
    /* position: absolute; */
    width: 233px;
    height: 43px;
    margin-left: 71px;
    margin-right: 71px;
    margin-bottom: 33px;
    margin-top: 33px;
    /* background-color:orange; */

    /* font-family: 'Fira Sans Condensed', sans-serif; */
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
`;

export default function SectionTitle(){
    return (
        <SectionTitleWrapper>Meus Projetos</SectionTitleWrapper>
    )
}