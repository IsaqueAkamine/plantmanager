import React from 'react';
import { useNavigation } from '@react-navigation/native';

import wateringImg  from '../../assets/watering.png';
import { api } from '../../services/api';

import { 
  Container,
  Wrapper,
  Title, 
  Image, 
  SubTitle,
  Button,
  ButtonIcon
} from './styles';

export default function Welcome(): JSX.Element {
  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIdentification');
  }
  
  return(
    <Container>
      <Wrapper>
        <Title>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil.
        </Title>

        <Image 
          source={wateringImg}
          resizeMode="contain"
        />

        <SubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar
        </SubTitle>

        <Button onPress={handleStart}>
          <ButtonIcon name="chevron-right"/>
        </Button>
      </Wrapper>
    </Container>
  );
}