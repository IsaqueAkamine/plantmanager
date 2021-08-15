import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
`;

export const Image = styled.Image`
    width: 292px;
    height: 284px;
`;

export const SubTitle = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 20px;
    color: ${colors.heading};
`;
