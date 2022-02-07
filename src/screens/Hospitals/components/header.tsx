import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

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
        Hospitals
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
