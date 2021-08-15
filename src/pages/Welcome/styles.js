import { Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
`;

export const Image = styled.Image`
    height: ${Dimensions.get('window').width * 0.7}px;
`;

export const SubTitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 20px;
    color: ${colors.heading};
`;

export const Button = styled.TouchableOpacity`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 24px;
`;

export const ButtonIcon = styled(Feather)`
    font-size: 32px;
    color: ${colors.white}
`;