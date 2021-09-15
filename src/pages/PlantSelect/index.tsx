import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';

import {
  Container, 
  HeaderContainer,
  Title,
  SubTitle,
  ListContainer,
} from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
}

export default function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

  useEffect(() => {
    async function getEnvironments(){
      api.get('plants_environments')
        .then((response) => {
          setEnvironments([{
            key: 'all',
            title: 'Todos'
          }, 
          ...response.data]);
        });
    }
    getEnvironments();
  }, []);


  return(
    <Container>
      <HeaderContainer>    
        <Header />
        <Title>
          Em qual ambiente
        </Title>
        <SubTitle>
          você quer colocar sua planta?
        </SubTitle>
      </HeaderContainer>

      <ListContainer>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title}/>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </ListContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  }
});