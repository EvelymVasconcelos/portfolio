import styled, {css} from 'styled-components'
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../fundation/Text';

export const CabecalhoWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    margin-bottom: 0;
    background-color: #FFF8E6;
    ${breakpointsMedia({
    xs: css`
        height: 40px;
        padding-left: 16px;
        padding-right: 16px;
        `,
    md: css`
        height: 67px;
        padding-left: 270px;
        padding-right: 277px;
        `,
    })}
`;

CabecalhoWrapper.LeftSide = styled.div`
    order: 1;
    background-color: #E9C46A;
    ${breakpointsMedia({
    xs: css`
        height: 40px;
        width: 82.73px;
        `,
    md: css`
        height: 67px;
        width: 136px;
        `,
    })}
`;

CabecalhoWrapper.RightSide = styled.div`
    order: 2;
    ${breakpointsMedia({
    xs: css`
        height: 40px;
        padding-top: 9px;
        padding-bottom: 9px;
        width: 175px;
        `,
    md: css`
        height: 67px;
        padding-top: 17px;
        padding-bottom: 16px;
        width: 300px;
        `,
    })}
`;