import styled from 'styled-components'

export const CabecalhoWrapper = styled.nav`
    /* font-family: 'Fira Sans Condensed', sans-serif; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap; 
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0px;
    height: 40px;
    /* width: 375px; */
    padding-left: 16px;
    padding-right: 16px;
    background-color: #FFF8E6;
`;

CabecalhoWrapper.LeftSide = styled.div`
    padding: 0;
    margin: 0;
    order: 1;
    width: 82.73px;
    height: 40px;
    background-color: #E9C46A;
`;

CabecalhoWrapper.RightSide = styled.div`
    padding: 0;
    margin: 0;
    order: 2;
    height: 40px;
    /* background-color: #E9C46A; */
`;