import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { HomeNavigation, ScoreNavigation, SettingsNavigation } from '../../navigations';

function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={ HomeNavigation }
                options={{ tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} /> }}
            />

            <Tab.Screen
                name="Scores"
                component={ ScoreNavigation }
                options={{ tabBarIcon: ({ color, size }) => <Icon name="activity" color={color} size={size} /> }}
            />

            <Tab.Screen
                name="Settings"
                component={ SettingsNavigation }
                options={{ tabBarIcon: ({ color, size }) => <Icon name="settings" color={color} size={size} /> }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation;