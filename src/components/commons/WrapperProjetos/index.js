import React from 'react'
import styled, { css } from 'styled-components'
import Card from '../Card';
import SectionTitle from '../SectionTitle';
import { TextStyleVariantsMap } from '../../fundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const ProjetosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: white;
`;

export default function WrapperProjetos(){
    return (
        <ProjetosWrapper>
            <SectionTitle />
            <Card />
        </ProjetosWrapper>

    )
}