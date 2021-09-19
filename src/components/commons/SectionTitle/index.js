import React from 'react'
import styled, { css } from 'styled-components'
import get from 'lodash/get';
import Text, { TextStyleVariantsMap } from '../../fundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const SectionTitleWrapper = styled.div`
    width: 100%;

    ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.projectsXS}
        margin-top: 32px;
        margin-bottom: 33px;
        `,
    md: css`
        ${TextStyleVariantsMap.projects}
        margin-top: 64px;
        margin-bottom: 85px;
        `,
    })}
`;

export default function SectionTitle(){
    return (
        <SectionTitleWrapper> 
            Meus Projetos
        </SectionTitleWrapper>
    )
}