import React from 'react';
import {StyleSheet} from 'react-native';
import RootStack from './src/nav/RootStack';
import 'react-native-gesture-handler';
import Filter from './src/screens/Test/test';
import WelcomeScreen from './src/screens/Start';

const App = () => {
  return <RootStack />;
};

export default App;

const styles = StyleSheet.create({});
