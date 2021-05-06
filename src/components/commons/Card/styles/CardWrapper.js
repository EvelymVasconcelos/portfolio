import styled from 'styled-components'
import get from 'lodash/get';


export const CardWrapper = styled.div`
    /* display: flex; */
    /* background-color: black; */
    /* height: 1178px; */
    /* margin-bottom: 33px; */
`;

CardWrapper.Title = styled.div`
    margin-top: 18px;
`;

CardWrapper.Text = styled.p`
    margin: 0;
    /* font-family: 'Fira Sans Condensed', sans-serif; */
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => get(theme, `colors.primary.main.contrastText`)};
`
CardWrapper.CardDestaque = styled.div`
    /* order: 1; */
    /* width: 100%; */
    position: relative;
    height: 249px;
    background-color: white;
    margin-left: 44px;
    margin-right: 44px;
    margin-top: 0;

    border: 1px solid #E9C46A;
    box-sizing: border-box;
`;


CardWrapper.CardCenter = styled.div`
    /* order: 2; */
    /* width: 290px; */
    height: 249px;
    background-color: white;
    margin-left: 44px;
    margin-right: 44px;
    margin-top: 32px;

    border: 1px solid #E9C46A;
    box-sizing: border-box;
    
`;

CardWrapper.CardRight = styled.div`
    /* width: 290px; */
    height: 249px;
    background-color: white;
    margin-left: 44px;
    margin-right: 44px;
    margin-top: 32px;

    border: 1px solid #E9C46A;
    box-sizing: border-box;
`;

CardWrapper.CardFinal = styled.div`
    /* width: 290px; */
    height: 249px;
    background-color: white;
    margin-left: 44px;
    margin-right: 44px;
    margin-top: 32px;
   

    border: 1px solid #E9C46A;
    box-sizing: border-box;
`;


// CardWrapper.CardText = styled.div`


// `;

