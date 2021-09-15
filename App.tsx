import React from 'react';
import { Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import { createServer } from 'miragejs';

import Routes from './src/routes';
import apiPlants from './src/services/server';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/plants_water_frequencies', () => {
      return apiPlants.plants_water_frequencies;
    });
    this.get('/api/plants_environments', () => {
      return apiPlants.plants_environments;
    });
    this.get('/api/plants', () => {
      return apiPlants.plants;
    });
  },
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