import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../../fundation/Text';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';


export const CardWrapper = styled.div`
    display: flex;
    
    ${breakpointsMedia({
    xs: css`
        padding-left: 41px;
        padding-right: 44px;
        flex-direction: column;
        justify-content: center; 
        `,
    md: css`
        
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 270px;
        padding-right: 270px;
        
        `,
    })}
`;

CardWrapper.Image = styled.img`
    ${breakpointsMedia({
        xs: css`
            width: 100%;
            height: 177px;
            `,
        md: css`
            margin: 0;
            ${({variant}) => variant == 'destaque' ? css`width: 593px; height: 100%;` : css`width: 100%; height: 390px`}
            `,
    })} 
 
`;

CardWrapper.Title = styled.div`
    color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
    ${breakpointsMedia({
        xs: css`
            text-align: center;
            padding-top: 18px;
            `,
        md: css`
            
            `,
    })} 
     
`;

CardWrapper.CardDestaque = styled.div`
    background-color: white;
    border: 1px solid #E9C46A;
    box-sizing: border-box;

    ${breakpointsMedia({
    xs: css`
        order: 1;
        height: 249px;
        `,
    md: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        order: 4;
        height: 320px;
     
        `,
    })}
`;


CardWrapper.CardCenter = styled.div`
    background-color: white;
    border: 1px solid #E9C46A;
    box-sizing: border-box;

    ${breakpointsMedia({
    xs: css`
        order: 2;
        height: 249px;
        margin-top: 32px;
        `,
    md: css`
        order: 1;
        height: 510px;
        `,
    })}
   
`;

CardWrapper.CardRight = styled.div`
    background-color: white;
    border: 1px solid #E9C46A;
    box-sizing: border-box;

    ${breakpointsMedia({
    xs: css`
        order: 3;
        height: 249px;
        margin-top: 32px;
        `,
    md: css`
        order: 2;
        height: 510px;
        `,
    })}
`;

CardWrapper.CardFinal = styled.div`
    background-color: white;
    border: 1px solid #E9C46A;
    box-sizing: border-box;

    ${breakpointsMedia({
    xs: css`
        order: 4;
        height: 249px;
        margin-top: 32px;
        margin-bottom: 32px;
        `,
    md: css`
        order: 3;
        height: 510px;
        `,
    })}
`;


