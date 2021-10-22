import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { format, isBefore } from 'date-fns';

import Button from '../../components/Button';

import waterdrop from '../../assets/waterdrop.png';
import { 
  AlertLabel, 
  Container,
  Controller,
  DateTimePickerButton,
  DateTimePickerText,
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
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangetime(event: Event, dateTime: Date | undefined){
    if (Platform. OS === 'android'){
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())){
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰');
    }

    if (dateTime) setSelectedDateTime(dateTime);
  }

  function handleOpenDateTimePickerForAndroid(){
    setShowDatePicker(oldState => !oldState);
  }

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

        {showDatePicker && 
          <DateTimePicker
            value={selectedDateTime}
            mode='time'
            display='spinner'
            onChange={handleChangetime}
          />
        }

        {
          Platform.OS === 'android' && (
            <DateTimePickerButton onPress={handleOpenDateTimePickerForAndroid}>
              <DateTimePickerText>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerText>
            </DateTimePickerButton>
          )
        }

        <Button 
          title="Cadastrar planta"
          onPress={()=>{}}
        />
      </Controller>
    </Container>
  );
}