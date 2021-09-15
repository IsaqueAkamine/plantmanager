import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnvironmentButton({
  title, 
  active = false,
  ...rest
}: EnvironmentButtonProps): JSX.Element {
  return(
    <Container active={active} {...rest}>
      <Title active={active}>
        {title}
      </Title>
    </Container>
  );
}