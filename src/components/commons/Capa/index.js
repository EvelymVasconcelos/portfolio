import React from 'react';
import styled, {css} from 'styled-components'
import get from 'lodash/get';
import Text from '../../fundation/Text';

const CapaWrapper = styled.div`
    height: 812px;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: white;
`;

const CapaText = styled.div`
    position: absolute;
    text-align: center;
    font-style: normal;
    color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
    margin: 0;
    padding-top: 304px;
    width: 100%;
`;

export default function Capa(){
    return (
        <CapaWrapper>
            <CapaText>
                <Text tag='p' variant='title'>Evelym Santos</Text>
                <Text tag='p' variant='subTitle'>Portfolio</Text>
            </CapaText>
        </CapaWrapper>

    )
}