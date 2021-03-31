import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 9px;
    margin-bottom: 9px;
    width: 169px;
    a {
        /* text-align: center;
        display: block; */
        text-decoration: none;
        color: #000000;
        text-align: center;
        text-transform: capitalize;
        /* color: #88989E;
        transition: 200ms ease-in-out;
        &:hover,
        &:focus {
            font-weight: 500;
            color: #070C0E;    
        } */
    }
    
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
                        <a href={link.url}>
                        {link.text}
                        </a>
                    </div>
                ))
            }
        </NavbarWrapper>
    )
}