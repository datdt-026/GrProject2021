import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RootStack from './src/nav/RootStack';
import Test from './src/screens/Test/test';
import ExampleOne from './src/screens/Test/test';
import 'react-native-gesture-handler';
import Header from './src/screens/Test/header';

const App = () => {
  return <RootStack />;
};

export default App;

const styles = StyleSheet.create({});
