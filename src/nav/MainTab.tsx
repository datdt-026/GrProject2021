import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/MainTab/Home';
import Patients from '../screens/MainTab/Patients';
import * as Iconlypack from 'react-native-iconly';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Iconlypack.Home set="bold" color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Patients"
        component={Patients}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Iconlypack.User set="bold" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
