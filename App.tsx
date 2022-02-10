import React from 'react';
import {StyleSheet} from 'react-native';
import RootStack from './src/nav/RootStack';
import 'react-native-gesture-handler';
import ModalTester from './src/screens/Arcticle/components/Modal';
import SignIn from './src/screens/Start/SignIn';

const App = () => {
  return <RootStack />;
};

export default App;

const styles = StyleSheet.create({});
