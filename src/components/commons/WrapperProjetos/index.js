import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle';

const ProjetosWrapper = styled.div`
    height: 1299px;
    background-color: white;
`;

export default function WrapperProjetos(){
    return (
        <ProjetosWrapper>
            <SectionTitle>Meus Projetos</SectionTitle>
        </ProjetosWrapper>

    )
}