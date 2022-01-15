import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors, Text, View} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Test/header';

const witdh = Dimensions.get('window').width;

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <Header />
      <View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              height: 78,
              width: 350,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 16,
              marginHorizontal: 22,
            }}>
            <Image
              source={require('../../../assets/icon/ic_emergency.png')}
              style={{borderRadius: 30, marginLeft: 12}}
            />
            <View marginL-16>
              <Text>Emergency</Text>
              <Text grey50>Short Description</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
