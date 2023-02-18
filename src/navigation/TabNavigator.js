import React from 'react'
import { Feather } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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
                    position:'absolute',
                    display: "flex",
                    height: 55,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                },
                null
            ],
            headerTitleAlign:'left',
            headerStyle: {
                height: 50
            },
            headerTitleStyle: {
                fontSize: 17,
                fontFamily:'Lato_900Black',
                paddingLeft:30,
                paddingTop:10
            },
            tabBarIconStyle: {
                marginTop:10,
            }
        }
        }
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{
                title: "",
                headerTitle: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Appointments" component={Appointments} options={{
                title: "",
                headerTitle: "Appointments",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="calendar" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Cafeteria" component={Cafeteria} options={{
                title: "",
                headerTitle: "Cafeteria",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="shopping-bag" size={size} color={color} />
                ),
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                title: "",
                headerTitle: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="settings" size={size} color={color} />
                ),
            }} />
        </Tab.Navigator>
    )
}



export default TabNavigator
