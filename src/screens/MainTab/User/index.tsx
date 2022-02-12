import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from './components/header';
import {auth, firebase} from '../../../firebase/config';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';
import {collection, doc, setDoc} from 'firebase/firestore';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../nav/RootStack';
<<<<<<< HEAD

const User = navigation => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
=======

<<<<<<< HEAD




const User = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
=======
const User = navigation => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
>>>>>>> a486b3e (only_chat_left)
>>>>>>> temp-branch

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
      setId(user.uid);
      const usersRef = firebase.firestore().collection('users');
      usersRef
        .doc(id)
        .get()
        .then(firestoreDocument => {
          if (!firestoreDocument.exists) {
            alert('User does not exist anymore.');
            return;
          } else {
            setEmail(firestoreDocument.data().EMAIL);
            setName(firestoreDocument.data().NAME);
            setPhone(firestoreDocument.data().MOBILE);
          }
        });
    });
  }, []);

<<<<<<< HEAD
  return (
    <View
=======
<<<<<<< HEAD
  return <View style={{
    flex: 1,
    flexDirection: "column"
  }} >
    <Header />
    <View style={{

      height: 300,
      width: '100%'

    }}>
      <Image
        source={require('./components/avatar.jpg')}
        style={{
          marginTop: 90,
          marginLeft: 140,
          width: 150,
          height: 150,
          borderRadius: 50,

        }} />


    </View>
    <View style={{

      flexDirection: 'row',
      backgroundColor: '#87CEEB',
      height: 50,
      width: 200,
      marginLeft: 115,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 25,
        textAlign: 'center',

      }}

      >{name}</Text>

    </View>
    <View style={{
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
        }} />
      <Text style={{
        alignItems: 'center',
        fontSize: 25,
        marginTop: 25,
        marginLeft: 25,
      }} >{email}</Text>
    </View>
    <View style={{


      height: 80,
      width: '100%',
      flexDirection: 'row'
    }}>
      <Image
        source={require('../../../assets/phone.png')}
        style={{
          marginTop: 15,
          marginLeft: 20,
          width: 50,
          height: 50,


        }} />
      <Text style={{
        alignItems: 'center',
        fontSize: 25,
        marginTop: 25,
        marginLeft: 25,
      }} >{phone}</Text>
    </View>
    <TouchableOpacity
      onPress={() => LogOut()}
=======
  return (
    <View
>>>>>>> a486b3e (only_chat_left)
>>>>>>> temp-branch
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Header />
      <View
        style={{
          height: 300,
          width: '100%',
        }}>
        <Image
          source={require('./components/avatar.jpg')}
          style={{
            marginTop: 90,
            marginLeft: 140,
            width: 150,
            height: 150,
            borderRadius: 50,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#87CEEB',
          height: 50,
          width: 200,
          marginLeft: 115,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>{name}</Text>
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
        <Text style={{alignItems: 'center'}}>{email}</Text>
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
        <Text>{phone}</Text>
      </View>
      <TouchableOpacity
        onPress={() => LogOut()}
        style={{
          backgroundColor: '#AFEEEE',
          height: 55,
          width: 100,
          marginVertical: 10,
          marginLeft: 165,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginVertical: 10,
          }}>
          Log-Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
