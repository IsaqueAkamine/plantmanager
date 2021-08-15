import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export default function Button({ title, ...rest } : ButtonProps){
  return (
    <Container {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}