import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, GameScreen } from '../../screens';

function HomeNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
