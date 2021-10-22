import React from 'react';

import loadAnimation from '../../assets/load.json';

import { Container, LottieViewStyled } from './styles';

export function Load(): JSX.Element{
  return (
    <Container>
      <LottieViewStyled 
        source={loadAnimation}
        autoPlay
        loop
      />
    </Container>
  );
}