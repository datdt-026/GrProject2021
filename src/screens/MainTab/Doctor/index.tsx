import React from 'react';
import {Dimensions, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Card from './components/Card';
import Header from './components/header';
const witdh = Dimensions.get('window').width;


const Doctor = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <Card />
    </SafeAreaView>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
