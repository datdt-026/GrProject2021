import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import Header from './components/header';
import * as Iconly from 'react-native-iconly';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../nav/RootStack';

const Home = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
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
              <Text grey40>For emergency situations</Text>
            </View>
            <Iconly.ArrowRight
              size={20}
              color="black"
              style={{marginLeft: 130}}
            />
          </View>
        </TouchableOpacity>

        {/* option list */}
        <View>
          <View style={{flexDirection: 'row'}}>
            {/* doctor */}
            <TouchableOpacity onPress={() => navigate('Doctor')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_doctor.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Doctors
                  </Text>
                  <Text style={{fontSize: 12}}>View Doctor List</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* clinic */}
            <TouchableOpacity onPress={() => navigate('Hospitals')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_clinic.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Hospitals
                  </Text>
                  <Text style={{fontSize: 12}}>View Hospital List</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigate('Article')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_article.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Related Articles
                  </Text>
                  <Text style={{fontSize: 12}}></Text>
                </View>
              </View>
            </TouchableOpacity>
             

            {/* lab */}
            <TouchableOpacity onPress={() => navigate('Medicine')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_lab.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Medicine
                  </Text>
                  <Text style={{fontSize: 12}}>Daily reminder</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            {/* Insurance */}
            <TouchableOpacity onPress={() => navigate('Upload')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_specialities.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Upload Image
                  </Text>
                  <Text style={{fontSize: 12}}></Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigate('MyPic')}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: 160,
                  height: 150,
                  marginTop: 16,
                  marginLeft: 22,
                }}>
                <Image
                  source={require('../../../assets/icon/ic_insurance.png')}
                  style={{borderRadius: 30, marginLeft: 12, marginTop: 12}}
                />
                <View style={{marginTop: 32, marginHorizontal: 12}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    My Pictures
                  </Text>
                  <Text style={{fontSize: 12}}>View my pictures</Text>
                </View>
              </View>
            </TouchableOpacity> 

            {/* article */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
