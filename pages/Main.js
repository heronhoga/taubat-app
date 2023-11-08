import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Preview, Doa, Profile } from "../pages";

import { StackActions } from "@react-navigation/native";
import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="" component={Preview} />
        <Tab.Screen name="" component={Doa} />
        <Tab.Screen name="" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
