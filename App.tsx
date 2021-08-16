import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';

import { Home } from './src/screens/Home';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Home />;
};

export default App;
