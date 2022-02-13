import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import Header from './components/header';

const width = Dimensions.get('window').width;

const Arcticle = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <Header />
      <View style={{alignItems: 'center', marginTop: 16}}>
        <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
          <ImageBackground
            source={require('../../assets/vaccine.png')}
            imageStyle={{borderRadius: 10}}
            style={{
              width: 343,
              height: 168,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
              }}>
              <Text style={{fontSize: 24, color: '#FFF', fontWeight: 'bold'}}>
                Covid-19 Vaccine
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <ScrollView style={{
            marginLeft: 10,
            marginRight: 15,
            }}>
            <Image
              source={require('../../assets/vaccine.png')}
              style={{
                width: 280,
                height: 144,
                alignSelf: 'center',
                marginTop: 16,
              }}
            />
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold', 
              marginTop: 16,
              }}>
              Covid-19 Vaccine{'\n'}
            </Text>
            <Text>
              From Wikipedia, the free encyclopedia{'\n'}
              {'\n'}A COVID‑19 vaccine is a vaccine intended to provide acquired
              immunity against severe acute respiratory syndrome coronavirus 2
              (SARS‑CoV‑2), the virus that causes coronavirus disease 2019
              (COVID‑19).{'\n'}
              {'\n'}Prior to the COVID‑19 pandemic, an established body of
              knowledge existed about the structure and function of
              coronaviruses causing diseases like severe acute respiratory
              syndrome (SARS) and Middle East respiratory syndrome (MERS). This
              knowledge accelerated the development of various vaccine platforms
              during early 2020. The initial focus of SARS-CoV-2 vaccines was on
              preventing symptomatic, often severe illness.On 10 January 2020,
              the SARS-CoV-2 genetic sequence data was shared through GISAID,
              and by 19 March, the global pharmaceutical industry announced a
              major commitment to address COVID‑19.{'\n'}
              {'\n'}The COVID‑19 vaccines are widely credited for their role in
              reducing the severity and death caused by COVID‑19.[4][5] Many
              countries have implemented phased distribution plans that
              prioritize those at highest risk of complications, such as the
              elderly, and those at high risk of exposure and transmission, such
              as healthcare workers.{'\n'}
              {'\n'}As of 1 February 2022, 10.1 billion doses of COVID‑19
              vaccines have been administered worldwide based on official
              reports from national public health agencies. By December 2020,
              more than 10 billion vaccine doses had been preordered by
              countries, with about half of the doses purchased by high-income
              countries comprising 14% of the world's population.
            </Text>
            <Button title="Done" onPress={toggleModal} />
          </ScrollView>
        </View>
      </Modal>
    </View>

    
  );
};

export default Arcticle;
