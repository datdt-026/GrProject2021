import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainTab from './MainTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Start';
import SignIn from '../screens/Start/SignIn';
import SignUp from '../screens/Start/SignUp';
import Doctor from '../screens/MainTab/Doctor';
import Hospitals from '../screens/Hospitals/Hospitals';
import List from '../screens/MainTab/List';
import Arcticle from '../screens/Arcticle';
import Upload from '../screens/Upload/Upload';
import Medicine from '../screens/Medicine/Medicine';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  MainTab: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Doctor: undefined;
  Hospitals: undefined;
  List: undefined;
  Arcticle: undefined;
  Upload: undefined;
  Medicine: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hospitals"
          component={Hospitals}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Arcticle"
          component={Arcticle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Medicine"
          component={Medicine}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
