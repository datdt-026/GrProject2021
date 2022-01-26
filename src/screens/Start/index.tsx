import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Assets from '../../config/Assets';
import {RootStackParamList} from '../../nav/RootStack';
import Banner from './components/Banner';

const dataBanner = [
  {id: '0', img: Assets.img_banner1},
  {id: '1', img: Assets.img_banner2},
  {id: '2', img: Assets.img_banner3},
];

const WelcomeScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{marginTop: 32, marginHorizontal: 24}}>
        <Text style={{fontSize: 40, fontWeight: '700', color: '#6D7BD1'}}>
          Welcome
        </Text>
        <Text style={{fontSize: 32, fontWeight: '600'}}>to Digital Clinic</Text>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          far far away, behind the word mountains, {'\n'}far from the countries
          Volkalia and Consonantia, there live the blind texts
        </Text>
      </View>
      <View style={{marginTop: 100}}>
        <Banner dataBanner={dataBanner} autoplay={false} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#C9E7E5',
          height: 40,
          width: 95,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          alignSelf: 'flex-end',
          marginRight: 16,
          flexDirection: 'row',
        }}
        onPress={() => navigate('SignIn')}>
        <Text style={{marginRight: 16}}>NEXT</Text>
        <Image source={require('../../assets/icon/ic_arrowR.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
