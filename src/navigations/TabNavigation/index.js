import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigation } from '../../navigations';
import Text from 'react-native';

function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ HomeNavigation } options={{ tabBarIcon: ({ color, size }) => <Text>asdasdasd</Text> }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;