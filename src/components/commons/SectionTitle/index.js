import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get';
import Text from '../../fundation/Text';

const SectionTitleWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding-bottom: 33px;
    padding-top: 33px;
`;

export default function SectionTitle(){
    return (
        <SectionTitleWrapper>
            <Text tag='p' variant='projects'>Meus Projetos</Text>
        </SectionTitleWrapper>
    )
}