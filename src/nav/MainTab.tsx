import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from '../screens/MainTab/Home';
import {Image, Colors} from 'react-native-ui-lib';
import Doctor from '../screens/MainTab/Doctor';
import User from '../screens/MainTab/User';
import Calendar from '../screens/MainTab/Calendar';
import List from '../screens/MainTab/List';
import Chat from '../screens/Chat';
import DoctorPage from '../screens/MainTab/DoctorPage';
import Admin from '../screens/MainTab/AdminSrc';

export type MainTabParamLits = {
  Home: undefined;
  List: undefined;
  Doctor: undefined;
  Calendar: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/Home.png')} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/Doctor.png')} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/Chat.png')} tintColor={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/Calendar.png')}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/User.png')} tintColor={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
