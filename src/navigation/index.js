import Home from '../screens';
import { NavigationContainer ***REMOVED*** from '@react-navigation/native';
import React from 'react'
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator ***REMOVED*** from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="main" component={TabNavigator***REMOVED*** options={{ headerShown: false ***REMOVED******REMOVED*** />
                <Stack.Screen name="Home" component={Home***REMOVED*** />
            </Stack.Navigator>
        </NavigationContainer>
    )
***REMOVED***

export default Navigator;
