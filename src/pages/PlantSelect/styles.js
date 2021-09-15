import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.background};
`;

export const HeaderContainer = styled.View`
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 17px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    line-height: 20px;
    margin-top: 15px;
`;

export const SubTitle = styled.Text`
    font-family: ${fonts.text};
    font-size: 17px;
    line-height: 20px;
    color: ${colors.heading};
`;

export const ListEnvironments = styled.View``;

export const ListPlants = styled.View`
    flex: 1;
    padding: 0 32px;
    justify-content: center;
`;