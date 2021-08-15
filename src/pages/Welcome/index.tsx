import React, { useState } from 'react';
import { Text } from 'react-native';

import wateringImg  from '../../assets/watering.png';
import Button from '../../components/Button';

import { Container, Title, Image, SubTitle } from './styles';

export default function Welcome(){
  const [visible, setVisible] = useState(false);

  function handleVisibility(){
    setVisible(true);
  }

  return(
    <Container>
      <Title>
        Gerencie {'\n'}
        suas plantas  {'\n'}
        de forma fácil
      </Title>

      {
        visible && <Image source={wateringImg}/>
      }

      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar
      </SubTitle>

      <Button title=">" onPress={handleVisibility}/>
    </Container>
  );
}