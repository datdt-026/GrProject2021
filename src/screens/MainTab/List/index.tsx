import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import urls from '../../../config/Api';
import Header from './components/header';

import {IPatient} from '../../../data/information';

const List = () => {
  const [data, setData] = React.useState<IPatient[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(urls.patient)
      .then(response => response.json())
      .then(patients => {
        console.log('json', patients);
        setData(patients);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id.toString()}
          renderItem={({item}) => (
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
                - Sympstoms: {item.sympstoms}
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
          )}
        />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  row: {
    fontSize: 10,
    paddingVertical: 20,
    marginRight: 10,
  },
});
