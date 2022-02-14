import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './components/header';
import Card from './components/Card';

const List = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />

      <Card />
    </SafeAreaView>
  );
};
export default List;

const styles = StyleSheet.create({
  row: {
    fontSize: 10,
    paddingVertical: 20,
    marginRight: 10,
  },
});
