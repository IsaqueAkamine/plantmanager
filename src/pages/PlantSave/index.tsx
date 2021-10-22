import React from 'react';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import Button from '../../components/Button';

import waterdrop from '../../assets/waterdrop.png';
import { 
  AlertLabel, 
  Container,
  Controller,
  PlantAbout,
  PlantInfo,
  PlantName,
  TipContainer, 
  TipImage,
  TipText,
} from './styles';

interface Params {
  plant: {
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
}

export function PlantSave():JSX.Element {
  const route = useRoute();
  const { plant } = route.params as Params;
  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} width={150} height={150}/>
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterdrop}/>
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>
            Escolha o melhor horário para ser lembrado:
        </AlertLabel>

        <Button 
          title="Cadastrar planta"
          onPress={()=>{}}
        />
      </Controller>
    </Container>
  );
}