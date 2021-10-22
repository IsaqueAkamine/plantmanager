import React from 'react';
import { SvgFromUri } from 'react-native-svg';

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

export function PlantSave():JSX.Element {
  return (
    <Container>
      <PlantInfo>
        <SvgFromUri uri='' width={150} height={150}/>
        <PlantName>Nome da planta</PlantName>
        <PlantAbout>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolores officiis itaque ullam, saepe quae totam nihil suscipit facere.
            Corrupti asperiores molestiae labore quasi similique aspernatur pariatur nemo! Nostrum, animi ipsum?
        </PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterdrop}/>
          <TipText>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TipText>
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