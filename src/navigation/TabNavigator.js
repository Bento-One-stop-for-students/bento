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
                    display: "flex",
                    height: 60,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingVertical:10,
                },
                null
            ],
            headerTitleAlign:'left',
            headerStyle: {
                height: 80
            },
            headerTitleStyle: {
                fontSize: 17,
                fontFamily:'Lato_900Black',
                paddingLeft:30,
                paddingTop:10
            },
        }
        }
            initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{
                title: "",
                headerTitle: "Home",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="home" size={size} color={color} />
                ),
                tabBarIconStyle:{
                    marginTop:5,
                },
            }} />
            <Tab.Screen name="Appointments" component={Appointments} options={{
                title: "",
                headerTitle: "Appointments",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="calendar" size={size} color={color} />
                ),
                tabBarIconStyle:{
                    marginTop:5,
                }
            }} />
            <Tab.Screen name="Cafeteria" component={Cafeteria} options={{
                title: "",
                headerTitle: "Cafeteria",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="shopping-bag" size={size} color={color} />
                ),
                tabBarIconStyle:{
                    marginTop:5,
                }
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                title: "",
                headerTitle: "Settings",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="settings" size={size} color={color} />
                ),
                tabBarIconStyle:{
                    marginTop:5,
                }
            }} />
        </Tab.Navigator>
    )
}



export default TabNavigator
