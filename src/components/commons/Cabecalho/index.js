import React from 'react';
import { Logo } from '../Logo';
import { Navbar } from '../Navbar';
import { CabecalhoWrapper } from './styles/CabecalhoWrapper';

export default function Cabecalho() {
  return (
    <CabecalhoWrapper>
      <CabecalhoWrapper.LeftSide>
        <Logo />
      </CabecalhoWrapper.LeftSide>
      <CabecalhoWrapper.RightSide>
        <Navbar />
      </CabecalhoWrapper.RightSide>
    </CabecalhoWrapper>
  )
}