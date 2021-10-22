import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userImg from '../../assets/isaque.png';

import { 
  Container,
  Content,
  Greeting,
  UserName,
  Image,
} from './styles';

export function Header(): JSX.Element{
  const [userName, setUserName] = useState<string>();

  useEffect(()=>{
    async function loadStorageUserName() {
      const user  = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    }

    loadStorageUserName();
  }, []);

  return(
    <Container>
      <Content>
        <Greeting>Olá</Greeting>
        <UserName>{userName}</UserName>
      </Content>
      <Image source={userImg} />
    </Container>
  );
}