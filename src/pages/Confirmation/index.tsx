import React from 'react';
import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';

import { 
  Container,
  Content,
  Emoji,
  Title,
  SubTitle,
  Footer,
} from './styles';

export default function Confirmation() {
  const navigation = useNavigation();

  const handleMoveOn = () => {
    navigation.navigate('PlantSelect');
  };

  return(
    <Container>
      <Content>
        <Emoji>😄</Emoji>
        <Title>Prontinho!</Title>
        <SubTitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</SubTitle>
        <Footer>
          <Button title='Começar' onPress={handleMoveOn}/>
        </Footer>
      </Content>
    </Container>
  );
}