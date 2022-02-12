import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const witdh = Dimensions.get('window').width;

const Header = () => {
  const {goBack} = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#6574CF',
        width: witdh,
        height: 80,
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <TouchableOpacity onPress={() => goBack()}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
            marginLeft: 24,
            color: '#FFF',
          }}>
          ◀︎ Medicine
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
