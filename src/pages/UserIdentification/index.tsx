import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import { Container, 
  Content,
  KeyboardAvoiding,
  Form,
  Title,
  Header,
  Emoji,
  Input,
  Footer,
} from './styles';

export default function UserIdentification() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();


  function handleSubmit(){
    navigation.navigate('Confirmation');
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <Container>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
        <Content>
          <Form>
            <Header>
              <Emoji>{isFilled ? '😄' : '😀'}</Emoji>
              <Title>
                Como podemos {'\n'}
                chamar você?
              </Title>
            </Header>
            <Input 
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              isFocused={isFocused}
              isFilled={isFilled}
              onChangeText={handleInputChange}
            />
            <Footer>
              <Button title="Confirmar" onPress={handleSubmit}/>
            </Footer>
          </Form>
        </Content>
      </KeyboardAvoiding>
    </Container>
  );
}