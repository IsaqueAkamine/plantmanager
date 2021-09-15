import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

import {
  Container, 
  HeaderContainer,
  Title,
  SubTitle,
  ListEnvironments,
  ListPlants
} from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
}
interface PlantProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export default function PlantSelect(): JSX.Element {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);
  }

  useEffect(() => {
    async function getEnvironments(){
      api.get('plants_environments')
        .then((response) => {
          const sortedList = response.data.sort(function (a:EnvironmentProps, b:EnvironmentProps) {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          setEnvironments([{
            key: 'all',
            title: 'Todos'
          }, 
          ...sortedList]);
        });
    }
    getEnvironments();
  }, []);

  useEffect(() => {
    async function getPlants(){
      api.get('plants')
        .then((response) => {
          const sortedList = response.data.sort(
            function (a:PlantProps, b:PlantProps) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            }
          );
          setPlants(sortedList);
        });
    }
    getPlants();
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

      <ListEnvironments>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton 
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </ListEnvironments>

      <ListPlants>
        <FlatList
          data={plants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item}/>
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </ListPlants>
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