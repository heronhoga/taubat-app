import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
import Preview from './Preview';
import Doa from './Doa';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function Main() {

  
  return (
    
    <Tab.Navigator>
      <Tab.Screen
        name="Tentang aplikasi"
        component={Preview}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Doa"
        component={Doa}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pray" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

