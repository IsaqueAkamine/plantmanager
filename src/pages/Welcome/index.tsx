import React from 'react';

import wateringImg  from '../../assets/watering.png';

import { 
  Container, 
  Title, 
  Image, 
  SubTitle,
  Button,
  ButtonIcon
} from './styles';

export default function Welcome(){

  return(
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas  {'\n'}
        de forma fácil
      </Title>

      <Image 
        source={wateringImg}
        resizeMode="contain"
      />

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar
      </SubTitle>

      <Button>
        <ButtonIcon name="chevron-right"/>
      </Button>
    </Container>
  );
}