import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
    background-color: ${props => props.active ? colors.green_light : colors.shape};
    height: 40px;
    width: 76px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 5px;
`;    

export const Title = styled.Text`
    color: ${props => props.active ? colors.green_dark : colors.heading};
    font-family: ${props => props.active ? fonts.heading : fonts.text};
`;