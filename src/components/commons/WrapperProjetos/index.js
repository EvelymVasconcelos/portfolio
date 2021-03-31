import React from 'react'
import styled from 'styled-components'
import Card from '../Card';
import SectionTitle from '../SectionTitle';

const ProjetosWrapper = styled.div`
    height: 1217px;
    background-color: white;
`;

export default function WrapperProjetos(){
    return (
        <ProjetosWrapper>
            <SectionTitle>Meus Projetos</SectionTitle>
            <Card />
        </ProjetosWrapper>

    )
}