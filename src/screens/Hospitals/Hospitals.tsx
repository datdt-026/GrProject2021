import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from './components/header';

const width = Dimensions.get('window').width;

const Hospitals = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ImageBackground
        source={require('../../assets/Frame.png')}
        imageStyle={{borderRadius: 30}}
        style={{
          width: width - 24,
          height: 100,
          marginTop: 16,
          marginHorizontal: 12,
          borderRadius: 30,
        }}>
        <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text style={styles.text}>Special Deal {'\n'}for october</Text>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{}}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginHorizontal: 24,
  },
});
