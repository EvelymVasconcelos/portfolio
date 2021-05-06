import React from 'react';
import styled, {css} from 'styled-components'
import get from 'lodash/get';

const CapaWrapper = styled.div`
    height: 812px;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    background-color: white;
`;

const CapaText = styled.p`
    position: absolute;
    /* font-family: 'Fira Sans Condensed', sans-serif; */
    text-align: center;
    font-style: normal;
    color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
    

    ${function(props){
        if(props.variant == 'title'){
            return css`
                width: 100%;
                height: 154px;
                /* margin-left: 51px;
                margin-right: 51px; */
                margin-top: 304px;
                
                font-weight: normal;
                font-size: 64px;
                line-height: 77px;
                text-transform: uppercase;   
            `
        }else{
            return css`
                width: 100%;
                height: 58px;
                /* margin-left: 104px;
                margin-right: 104px; */
                margin-top: 451px;

                font-weight: 300;
                font-size: 48px;
                line-height: 58px;
                text-transform: capitalize;
            `
        }
    }}
`;

export default function Capa(){
    return (
        <CapaWrapper>
            <CapaText variant='title'>Evelym Santos</CapaText>
            <CapaText variante='subtitle'>Portfolio</CapaText>
        </CapaWrapper>

    )
}