import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/homeScreen';
import QuizScreen from '../screens/quizScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ResultScreen from '../screens/resultScreen';

const RootStack = createNativeStackNavigator();

const Router = () => {
  return (
    <GestureHandlerRootView>
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
    </GestureHandlerRootView>
  )
}

export default Router


