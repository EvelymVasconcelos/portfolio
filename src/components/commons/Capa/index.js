import React from 'react';
import styled, {css} from 'styled-components'
import get from 'lodash/get';
import Text, { TextStyleVariantsMap } from '../../fundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.div`
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: white;
    height: 93vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    font-style: normal;
    text-transform: uppercase; 

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.titleXS}
        `,
    md: css`
        ${TextStyleVariantsMap.title}
        `,
    })}
`;

export default function Capa(){
    return (
        <CapaWrapper>
            Evelym Santos
            <Text tag="p" variant="subTitle">Portfolio</Text>
        </CapaWrapper>

    )
}