import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../nav/RootStack';

const width = Dimensions.get('window').width;

const SignUp = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={require('../../../assets/Sign/backgr.png')}
          style={{
            width: width,
            height: 274,
          }}>
          <Image
            source={require('../../../assets/Sign/logo.png')}
            style={{marginTop: 42, marginLeft: 32}}
          />

          <Text
            style={{
              marginTop: 42,
              marginLeft: 32,
              fontSize: 36,
              fontWeight: 'bold',
              color: '#FFF',
            }}>
            Sign Up
          </Text>
          <Text
            style={{
              marginLeft: 32,
              marginTop: 12,
              fontSize: 16,
              color: '#FFF',
            }}>
            Please enter your credentials to proceed
          </Text>
        </ImageBackground>

        <View style={{marginTop: 22, marginHorizontal: 32}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>NAME</Text>
          <TextInput
            style={{
              backgroundColor: '#E4E9F2',
              width: 327,
              height: 40,
              borderRadius: 8,
              marginVertical: 16,
            }}
            placeholder="Name"
          />
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>EMAIL</Text>
          <TextInput
            style={{
              backgroundColor: '#E4E9F2',
              width: 327,
              height: 40,
              borderRadius: 8,
              marginVertical: 16,
            }}
            placeholder="Email"
          />
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>MOBILE NUMBER</Text>
          <TextInput
            style={{
              backgroundColor: '#E4E9F2',
              width: 327,
              height: 40,
              borderRadius: 8,
              marginVertical: 16,
            }}
            placeholder="Mobile Number"
          />
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>PASSWORD</Text>
          <TextInput
            style={{
              backgroundColor: '#E4E9F2',
              width: 327,
              height: 40,
              borderRadius: 8,
              marginVertical: 16,
            }}
            placeholder="Password"
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Text style={{color: '#6574CF', fontSize: 14, fontWeight: 'bold'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 327,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 10,
              backgroundColor: '#6574CF',
            }}>
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>SIGN UP</Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 12,
            }}>
            <Text style={{fontWeight: 'bold'}}>OR</Text>
          </View>
          <View
            style={{
              marginTop: 16,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Image source={require('../../../assets/icon/ic_gg.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 24}}>
              <Image source={require('../../../assets/icon/ic_fb.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../../assets/icon/ic_twt.png')} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 16,
              marginBottom: 24,
            }}
            onPress={() => navigate('SignIn')}>
            <Text
              style={{
                color: '#6574CF',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Sign In here!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
