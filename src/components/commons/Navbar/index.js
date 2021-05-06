import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get';
import Text from '../../fundation/Text';

const NavbarWrapper = styled.nav`
    /* font-style: normal;
    font-weight: normal; */
    /* font-size: 18px;
    font-weight: 400;
    line-height: 22px; */

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 9px;
    margin-bottom: 9px;
    width: 169px;
  
    
`;

export function Navbar(){
    const links = [
        {
          text: 'Sobre Mim',
          url: '/sobre' 
        },
        {
          text: 'Contato',
          url: '/contato'
        }
      ]
    return (
        <NavbarWrapper>
            {
                links.map((link) => (
                    <div key={link.url}>
                        <Text tag="a" variant="menu1" href={link.url}>
                        {link.text}
                        </Text>
                    </div>
                ))
            }
        </NavbarWrapper>
    )
}