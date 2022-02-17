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
  import Header from './Header';
  
  const width = Dimensions.get('window').width;
  
  const MyPic = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <ScrollView>
          <ImageBackground
            source={{uri: 'https://news.cancerresearchuk.org/wp-content/uploads/2018/12/LungCancerCTscan.jpg'}}
            imageStyle={{borderRadius: 30}}
            style={{
              width: width - 24,
              height: '100%',
              marginTop: 16,
              marginHorizontal: 12,
              borderRadius: 10,
            }}>
            <View style={{alignItems: 'flex-end', marginTop: 64}}>
              <TouchableOpacity
                style={{
                  width: 82,
                  height: 42,
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  marginHorizontal: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}
                onPress={() => alert('Symptoms: Dry cough, difficulty breathing, chest pain\ndate_diagnosis: 25/11/2021 \ndate_ctscan: 26/11/2021')} >
                <Text>Details</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          
          <ImageBackground
            source={{uri: 'https://c8.alamy.com/comp/2GYNGYH/lung-cancer-ct-scan-2GYNGYH.jpg'}}
            imageStyle={{borderRadius: 30}}
            style={{
              width: width - 24,
              height: '100%',
              marginTop: 16,
              marginHorizontal: 12,
              borderRadius: 10,
            }}>
            <View style={{alignItems: 'flex-end', marginTop: 64}}>
              <TouchableOpacity
                style={{
                  width: 82,
                  height: 42,
                  backgroundColor: '#FFF',
                  borderRadius: 10,
                  marginHorizontal: 48,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 5,
                }}
                onPress={() => alert('Symptoms: dry cough, difficulty breathing, chest pain\nDate diagnosis: 25/11/2021 \nDate ctscan: 26/11/2021')} >
                <Text>Details</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default MyPic;
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginHorizontal: 24,
    },
  });