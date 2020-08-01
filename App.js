import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigation } from './src/navigations';

function App() {
  return (
      <NavigationContainer>
          <TabNavigation />
      </NavigationContainer>
  );
}

export default App;
