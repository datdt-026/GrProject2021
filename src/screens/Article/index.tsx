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
  SafeAreaView
} from 'react-native';
import Modal from 'react-native-modal';
import Header from './components/header';

const width = Dimensions.get('window').width;

const Article = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <Header />
      <View style={{alignItems: 'center', marginTop: 16}}>
        <TouchableOpacity activeOpacity={0.6} onPress={toggleModal}>
          <ImageBackground
            source={require('../../assets/LungCACXR.png')}
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
                Lung cancer
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
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
              source={require('../../assets/LungCACXR.png')}
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
              Lung Cancer{'\n'}
            </Text>
            <Text>
            Lung cancer is still one of the most frequent malignancies globally, killing more people each year than breast, colon, and prostate cancers combined.{'\n'}
            •	Lung cancer is by far the most common cause of cancer mortality in both men and women, accounting for over 25% of all cancer fatalities. Lung cancer kills more people each year than colon, breast, and prostate cancer combined. Worldwide in 2020, there were 2.21 million new cases of lung cancer and 1.80 million deaths from lung cancer. {'\n'}
            •	Lung cancer has the lowest 5-year survival rate at only 18% compared to breast at 90%, prostate at 99%, and colorectal at 65%. {'\n'}{'\n'}

            In Vietnam, in 2018, according to the World Health Organization (WHO), we had the rate of 21.7 cases per 100,000 people, ranked 56 out of 185 countries and territories. We had the highest rate in South-East Asia. In the same year, Vietnam recorded more than 33,600 new cases and nearly 21,000 deaths.

            {'\n'}{'\n'}According to Global Cancer Statistics, lung cancer has a high incidence and fatality rate. Most lung cancer patients are diagnosed when it has progressed to an advanced stage.
            {'\n'}This is because most lung cancer patients have no particular evident symptoms at the start of the disease, and many people are discovered at an advanced stage. According to statistics, the prognosis of lung cancer is closely related to the clinical stage, implying that early detection might enhance the patient's prognosis. Efficient diagnosis and screening procedures must be chosen to increase the early detection rate and forecast of lung cancer. The 5-year survival rate for lung cancer drops dramatically from a stage 1 diagnosis (68-92% survival) to a stage 4 diagnosis (0-10% survival). Only 16% of the eligible population will be diagnosed at an early stage when lung cancer is when the disease is most likely to be cured. Therefore, our project has the aim to build a mobile application to help doctors can remotely diagnose lung cancer.

            </Text>
            <Button title="Done" onPress={toggleModal} />
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>

    
  );
};

export default Article;
