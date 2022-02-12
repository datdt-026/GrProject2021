import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

const witdh = Dimensions.get('window').width;

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#6574CF',
        width: witdh,
        height: 80,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          marginLeft: 24,
          color: '#FFF',
        }}>
        DoctorPage
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
