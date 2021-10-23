import React, { useState } from 'react';
import { Alert, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

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


  async function handleSubmit(){
    if (!name){
      return Alert.alert('Me diz como chamar você 🥲');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation');  
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 🥲');
    }
    
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Container>
  );
}