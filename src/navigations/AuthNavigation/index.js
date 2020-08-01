import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen, SignInScreen } from '../../screens';

function HomeNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;