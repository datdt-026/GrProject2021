/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Assets from '../config/Assets';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.txtHeader}>Find Your{'\n'}Favourite Food</Text>

      <TouchableOpacity
        style={styles.btnNoti}
        onPress={() => {
          alert('onPress ic noti');
        }}>
        <Image source={Assets.ic_notification} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginLeft: 31,
    marginRight: 39,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  txtHeader: {
    color: '#09051C',
    fontSize: 31,
    lineHeight: 41,
  },
  btnNoti: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    elevation: 3,
  },
});
