import React from 'react'
import { Feather ***REMOVED*** from '@expo/vector-icons'; 
import { createBottomTabNavigator ***REMOVED*** from '@react-navigation/bottom-tabs'

import Home from '../screens';
import Settings from '../screens/settings';
import Cafeteria from '../screens/cafeteria';
import Appointments from '../screens/appointments';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#7345F6",
            tabBarInactiveTintColor: "gray",
            fontSize: 12,
            tabBarStyle: [
                {
                    display: "flex",
                    height: 60,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingVertical:10,
            ***REMOVED***,
                null
            ],
            headerTitleAlign:'left',
            headerStyle: {
                height: 80
        ***REMOVED***,
            headerTitleStyle: {
                fontSize: 17,
                fontFamily:'Lato_900Black',
                paddingLeft:30,
                paddingTop:10
        ***REMOVED***,
    ***REMOVED***
    ***REMOVED***
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home***REMOVED*** options={{
                title: "",
                headerTitle: "Home",
                tabBarIcon: ({ color, size ***REMOVED***) => (
                    <Feather name="home" size={size***REMOVED*** color={color***REMOVED*** />
                ),
                tabBarIconStyle:{
                    marginTop:5,
            ***REMOVED***,
        ***REMOVED******REMOVED*** />
            <Tab.Screen name="Appointments" component={Appointments***REMOVED*** options={{
                title: "",
                headerTitle: "Appointments",
                tabBarIcon: ({ color, size ***REMOVED***) => (
                    <Feather name="calendar" size={size***REMOVED*** color={color***REMOVED*** />
                ),
                tabBarIconStyle:{
                    marginTop:5,
            ***REMOVED***
        ***REMOVED******REMOVED*** />
            <Tab.Screen name="Cafeteria" component={Cafeteria***REMOVED*** options={{
                title: "",
                headerTitle: "Cafeteria",
                tabBarIcon: ({ color, size ***REMOVED***) => (
                    <Feather name="shopping-bag" size={size***REMOVED*** color={color***REMOVED*** />
                ),
                tabBarIconStyle:{
                    marginTop:5,
            ***REMOVED***
        ***REMOVED******REMOVED*** />
            <Tab.Screen name="Settings" component={Settings***REMOVED*** options={{
                title: "",
                headerTitle: "Settings",
                tabBarIcon: ({ color, size ***REMOVED***) => (
                    <Feather name="settings" size={size***REMOVED*** color={color***REMOVED*** />
                ),
                tabBarIconStyle:{
                    marginTop:5,
            ***REMOVED***
        ***REMOVED******REMOVED*** />
        </Tab.Navigator>
    )
***REMOVED***



export default TabNavigator
