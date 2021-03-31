import React from 'react'
import styled from 'styled-components'

const SectionTitleWrapper = styled.p`
    /* position: absolute; */
    width: 233px;
    height: 43px;
    margin-left: 71px;
    margin-right: 71px;
    margin-bottom: 35px;
    margin-top: 35px;
    /* background-color:orange; */

    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    color: black;
`;

export default function SectionTitle(){
    return (
        <SectionTitleWrapper>Meus Projetos</SectionTitleWrapper>
    )
}