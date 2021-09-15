import React from 'react';
import { Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import { createServer } from 'miragejs';

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'teste',
        }
      ];
    });
  }
});

const App = () =>{
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) 
    return <AppLoading />;

  return (
    <Routes />
  );
};

export default App;