import {
    Dimensions,
    FlatList,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar
  } from 'react-native';
import React, {useState, useEffect} from 'react';
import SearchComponent from '../../../../components/Search';
import axios from "axios";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../nav/RootStack';
  
  const Card = () => {
    const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);
    const [err, setErr] = useState("");
    const [term, setTerm] = useState("");
    
    const getData = (name) => {
      axios.get(`https://61a718ea8395690017be94dc.mockapi.io/Patients?name=${name}`).then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
        } else {
          setData([]);
          setErr("                                     No patient found");
        }
      });
    };
    useEffect(() => {
      getData(term);
    }, [term]);
  
  
    const renderCard = ({ item }) => {
        return (
          <TouchableOpacity onPress={() => navigate('MessDoc')}>

              <View style={{margin: 12}}>
                  <Image
                      style={{
                      width: 240,
                      height: 200,
                      borderRadius: 10,
                      borderColor: 'black',
                      }}
                      source={{uri: `${item.src}`}}
                  />
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - ID: {item.id}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Name: {item.name}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Age: {item.age}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Address: {item.address}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Phone: {item.phone}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Symptoms: {item.sympstoms}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Date of Diagnosis: {item.date_diagnosis}
                  </Text>
                  <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                      - Date of CT Scan: {item.date_ctscan}
                  </Text>
                  <Text
                      style={{
                      color: '#A1A4B2',
                      marginTop: 5,
                      textAlign: 'left',
                  }}>
                      _______________
                  </Text>
              </View>
          </TouchableOpacity>
        )
      };
  
    return (
      <>
        <View>
          <SearchComponent onSearchEnter={(newTerm) => {
            setTerm(newTerm);
            setErr("");
          }} />
  
          {err ?
            <Text>{err}</Text>
            :
            <FlatList
              data={data}
              renderItem={renderCard}
              keyExtractor={Patient => Patient.name}
            />
          }
        </View>
      </>
    );
  };
  
  export default Card;
  
  const styles = StyleSheet.create({});
  