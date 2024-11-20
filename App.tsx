import 'react-native-gesture-handler';
import React from 'react'
import Router from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  )
}

export default App


