import React from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import Welcome from './src/pages/Welcome';
import UserIdentification from './src/pages/UserIdentification';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

const App = () =>{
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) 
    return <AppLoading />;

  return (
    // <Welcome />
    <UserIdentification />
  );
};

export default App;