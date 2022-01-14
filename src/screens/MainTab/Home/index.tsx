import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 16, alignItems: 'center'}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          Lung Cancer Care System
        </Text>

        <Image
          source={require('../../../assets/LungCACXR.png')}
          style={{height: 350, width: 350, marginTop: 16}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 20, marginHorizontal: 16}}>
          According to recent statistics, lung cancer is the disease that
          accounts for the highest rate of morbidity and mortality among cancer
          diseases globally.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 63,
            width: 350,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 42,
          }}>
          <Text style={{fontSize: 16}}>View More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
