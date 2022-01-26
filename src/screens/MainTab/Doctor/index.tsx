import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';
import Header from './components/header';
const witdh = Dimensions.get('window').width;

const Doctor = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text
        style={{
          fontSize: 16,
          marginHorizontal: 24,
          marginTop: 16,
          fontWeight: '700',
        }}>
        Doctor List
      </Text>
      <Card />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
