import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../pages/Welcome';
import UserIdentificationScreen from '../pages/UserIdentification';
import ConfirmationScreen from '../pages/Confirmation';
import PlantSelectScreen from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen 
      name="Welcome"
      component={WelcomeScreen}
    />
    <stackRoutes.Screen 
      name="UserIdentification"
      component={UserIdentificationScreen}
    />
    <stackRoutes.Screen 
      name="Confirmation"
      component={ConfirmationScreen}
    />
    <stackRoutes.Screen 
      name="PlantSelect"
      component={PlantSelectScreen}
    />
    <stackRoutes.Screen 
      name="PlantSave"
      component={PlantSave}
    />

  </stackRoutes.Navigator>
);

export default AppRoutes;