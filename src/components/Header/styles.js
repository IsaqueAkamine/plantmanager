import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`

`;

export const Greeting = styled.Text`
    font-size: 32px;
    font-family: ${fonts.text};
    color: ${colors.heading};
`;

export const UserName = styled.Text`
    font-size: 32px;
    font-family: ${fonts.heading};
    color: ${colors.heading};
    line-height: 40px;
`;

export const Image = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;