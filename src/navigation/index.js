import Home from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;
