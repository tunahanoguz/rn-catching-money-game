import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen, ScoresScreen} from '../../screens';

function HomeNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;