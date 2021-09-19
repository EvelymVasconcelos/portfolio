import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const FooterWrapper = styled.div`
    height: 68px;
    background: #FFF8E6;
    margin: 0;
    
`;

const FooterIcon = styled.div`
    width: 224px;
    height: 68px;
    
    background: #E9C46A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; 

    ${breakpointsMedia({
    xs: css`
        margin-left: 75px;
        `,
    md: css`
        margin-left: 608px;
        `,
})}
`;

FooterIcon.Left = styled.div`
    order: 1;   
    height: 32px;
    width: 32px;
    margin-left: 24px;
    

    /* background: #000000; */

`;

FooterIcon.Center = styled.div`
    order: 2; 
    height: 32px;
    width: 32px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

`;

FooterIcon.Right = styled.div`
    order: 3; 
    height: 32px;
    width: 32px;
 
    margin-right: 24px;
 

`;


export default function Footer(){
    return (
        <FooterWrapper>
            <FooterIcon>
                <FooterIcon.Left>
                    <Image
                        src='/twitter.png'
                        alt="Picture of the author"
                        width={32}
                        height={32}
                    />
                </FooterIcon.Left>
                <FooterIcon.Center>
                    <Image
                        src='/github.png'
                        alt="Picture of the author"
                        width={32}
                        height={32}
                    />
                </FooterIcon.Center>
                <FooterIcon.Right>
                    <Image
                        src='/linkedin.png'
                        alt="Picture of the author"
                        width={32}
                        height={32}
                    />
                </FooterIcon.Right>


            </FooterIcon>

        </FooterWrapper>
        
    )
}