import React from 'react';

import userImg from '../../assets/isaque.png';

import { 
  Container,
  Content,
  Greeting,
  UserName,
  Image,
} from './styles';

export function Header(): JSX.Element{
  return(
    <Container>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>Isaque</UserName>
      </Content>
      <Image source={userImg} />
    </Container>
  );
}