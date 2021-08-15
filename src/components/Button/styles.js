import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: 56px;
    width: 56px;
    /* padding: 0 10px; */
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-size: 24px;
`;