import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView
} from 'react-native';
import React from 'react';
import Header from './components/header';

const width = Dimensions.get('window').width;

const Hospitals = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <ImageBackground
          source={require('../../assets/phoiTW.jpeg')}
          imageStyle={{borderRadius: 30}}
          style={{
            width: width - 24,
            height: 100,
            marginTop: 16,
            marginHorizontal: 12,
            borderRadius: 30,
          }}>
          {/* <Text style={styles.text}>National Lung {'\n'} Hospital</Text> */}
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('phone: 0973471150')}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/E.jpg')}
          imageStyle={{borderRadius: 30}}
          style={{
            width: width - 24,
            height: 100,
            marginTop: 16,
            marginHorizontal: 12,
            borderRadius: 30,
          }}>
          {/* <Text style={styles.text}>National Lung {'\n'} Hospital</Text> */}
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('phone: 0973471150')}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/phoiTW.jpeg')}
          imageStyle={{borderRadius: 30}}
          style={{
            width: width - 24,
            height: 100,
            marginTop: 16,
            marginHorizontal: 12,
            borderRadius: 30,
          }}>
          {/* <Text style={styles.text}>National Lung {'\n'} Hospital</Text> */}
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('phone: 0973471150')}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/phoiTW.jpeg')}
          imageStyle={{borderRadius: 30}}
          style={{
            width: width - 24,
            height: 100,
            marginTop: 16,
            marginHorizontal: 12,
            borderRadius: 30,
          }}>
          {/* <Text style={styles.text}>National Lung {'\n'} Hospital</Text> */}
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('phone: 0973471150')}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ImageBackground
          source={require('../../assets/phoiTW.jpeg')}
          imageStyle={{borderRadius: 30}}
          style={{
            width: width - 24,
            height: 100,
            marginTop: 16,
            marginHorizontal: 12,
            borderRadius: 30,
          }}>
          {/* <Text style={styles.text}>National Lung {'\n'} Hospital</Text> */}
          <View style={{alignItems: 'flex-end', marginTop: 64}}>
            <TouchableOpacity
              style={{
                width: 82,
                height: 32,
                backgroundColor: '#FFF',
                borderRadius: 10,
                marginHorizontal: 48,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => alert('phone: 0973471150')}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 24,
  },
});
