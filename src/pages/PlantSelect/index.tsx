import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnvironmentButton';

import {
  Container, 
  HeaderContainer,
  Title,
  SubTitle,
  ListContainer,
} from './styles';

export default function PlantSelect(): JSX.Element {
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
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({ item }) => (
            <EnvironmentButton title="Cozinha"/>
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