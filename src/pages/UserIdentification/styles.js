import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;
export const KeyboardAvoiding = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 54px;
    align-items: center;
`;

export const Header = styled.View`
    align-items: center;
`;
 
export const Emoji = styled.Text`
    font-size: 44px;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    color: ${colors.heading};
    font-family: ${fonts.heading};
    line-height: 32px;
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${props => (props.isFocused || props.isFilled) ? colors.green : colors.gray};
    color: ${colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
`;

export const Footer = styled.View`
    width: 100%;
    margin-top: 40px;
    padding: 0 20px;
`;
