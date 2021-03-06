import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import Header from './components/header';
import { auth, firebase } from '../../../firebase/config';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import { collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../nav/RootStack';


const User = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();


  const [roles, setRoles] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        navigate('WelcomeScreen');
      })
      .catch(error => {
        alert(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      const uid = user.uid;
      const usersRef = firebase.firestore().collection('users')
      usersRef
        .doc(uid)
        .get()
        .then(firestoreDocument => {
          if (!firestoreDocument.exists) {
            alert("User does not exist anymore.")
            return;
          } else {
            setEmail(firestoreDocument.data().EMAIL);
            setName(firestoreDocument.data().NAME);
            setPhone(firestoreDocument.data().MOBILE);
            setRoles(firestoreDocument.data().ROLES);
          }
        });
    });
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Header />
      <View
        style={{
          height: 200,
          width: '100%',
          alignItems:'center',
          justifyContent:'center',
        }}>
        <Image
          source={require('../../../assets/ava.jpeg')}
          style={{
            marginTop: 0,
            width: 150,
            height: 150,
            borderRadius: 90,
          }}
        />
      </View>
      <View
        style={{
          alignItems:'center',
          justifyContent:'center',
        }}
        >
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#87CEEB',
            height: 50,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{
            fontSize: 25,
          }}>{name}</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'column',

      }}>
        <Text style={{
          alignItems: 'center',
          fontSize: 20,
          textAlign: 'center'
        }}>Role: {roles}</Text>

      </View>
      <View
        style={{
          height: 80,
          width: '100%',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/email.png')}
          style={{
            marginTop: 15,
            marginLeft: 20,
            width: 50,
            height: 50,
          }}
        />
        <Text style={{
          alignItems: 'center',
          fontSize: 25,
          marginLeft: 15,
          marginTop: 25,
        }}>{email}</Text>
      </View>
      
      <View
        style={{
          height: 80,
          width: '100%',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../../assets/phone.png')}
          style={{
            marginTop: 15,
            marginLeft: 20,
            width: 50,
            height: 50,
          }}
        />
        <Text style={{
          alignItems: 'center',
          fontSize: 25,
          marginLeft: 15,
          marginTop: 25,
        }}>{phone}</Text>
      </View>
      
      <View
        style={{
          alignItems:'center',
          justifyContent:'center',
        }}
        >
      <TouchableOpacity
        onPress={() => LogOut()}
        style={{
          backgroundColor: '#AFEEEE',
          height: 55,
          width: 100,
          marginVertical: 120,
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'black', 
            fontSize: 23,
            marginVertical: 12,
          }}>
          Log Out
        </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({});
