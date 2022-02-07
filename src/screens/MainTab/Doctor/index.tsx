import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Card from './components/Card';
import Header from './components/header';
const witdh = Dimensions.get('window').width;

import {IDoctor} from '../../../data/inforDoctor';

const Doctor = () => {
  const [data, setData] = React.useState<IDoctor[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  return (
    <View style={{flex: 1}}>
      <Header />

      <Card />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
