import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get';
import Text, { TextStyleVariantsMap } from '../../fundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    a {
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
        text-align: center;
        text-transform: capitalize;
        ${breakpointsMedia({
            xs: css`
                ${TextStyleVariantsMap.menuXS}
                `,
            md: css`
                ${TextStyleVariantsMap.menu}
                `,
        })}
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