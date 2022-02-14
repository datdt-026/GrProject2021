import React, {useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  doc,
  setDoc,
  where,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import {auth, firebase, db} from '../../../firebase/config';
import {getAuth, signOut} from 'firebase/auth';
import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../nav/RootStack';

export default function AdminSrc(props) {
  const [createText, setCreateText] = useState('');
  const [deleteText, setDeleteText] = useState('');
  const [updateText, setUpdateText] = useState('');
  const [userId, setUserId] = useState('');

  const onCreateButtonPress = async () => {
    const usersRef = firebase.firestore().collection('users');
    const q = query(collection(db, 'users'), where('MOBILE', '==', createText));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      setUserId(doc.data().id);
      usersRef
        .doc(userId)
        .update({ROLES: 'Doctor'})
        .then(() => {
          alert('Set Roles Doctor Successfully');
        })
        .catch(error => {
          alert(error);
        });
    });
  };

  const onDeleteButtonPress = async () => {
    const usersRef = firebase.firestore().collection('users');
    const q = query(collection(db, 'users'), where('MOBILE', '==', createText));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      setUserId(doc.data().id);
      usersRef
        .doc(userId)
        .update({ROLES: 'Patient'})
        .then(() => {
          alert('Set Roles Patient Successfully');
        })
        .catch(error => {
          alert(error);
        });
    });
  };

  const onUpdateButtonPress = async () => {
    const usersRef = firebase.firestore().collection('users');
    const q = query(collection(db, 'users'), where('MOBILE', '==', createText));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
      setUserId(doc.data().id);
      usersRef
        .doc(userId)
        .update({ROLES: 'Admin'})
        .then(() => {
          alert('Set Roles admin Successfully');
        })
        .catch(error => {
          alert(error);
        });
    });
  };
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        navigate('WelcomeScreen');
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add user phone number"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setCreateText(text)}
          value={createText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onCreateButtonPress}>
          <Text style={styles.buttonText}>AddDoctor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Doctor"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setDeleteText(text)}
          value={deleteText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onDeleteButtonPress}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add user phone number"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setUpdateText(text)}
          value={updateText}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={onUpdateButtonPress}>
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={LogOut}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.formCustom}>
                <TextInput
                    style={styles.input}
                    placeholder=''
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View> */}
      {/* {entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )} */}
    </View>
  );
}
