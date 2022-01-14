import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import urls from '../../config/Api';

import {IPatient} from '../../data/information';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Patients = () => {
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
    <SafeAreaView>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.row}>ID</Text>
          <Text style={styles.row}>Name</Text>
          <Text style={styles.row}>Age</Text>
          <Text style={styles.row}>Address</Text>
          <Text style={styles.row}>Phone</Text>
          {/* <Text style={styles.row}>Date of Diagnosis</Text>
          <Text style={styles.row}>Date of CT Scan</Text> */}
        </View>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.5,
              }}>
              <Image
                style={{
                  width: width,
                  height: height,
                  borderRadius: 10,
                  borderColor: 'black',
                }}
                source={{uri: `${item.src}`}}
              />
              <Text style={styles.row}>{item.id}</Text>
              <Text style={styles.row}>{item.name}</Text>
              <Text style={styles.row}>{item.age}</Text>
              <Text style={styles.row}>{item.address}</Text>
              <Text style={styles.row}>{item.phone}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Patients;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    fontSize: 10,
    paddingVertical: 20,
    marginRight: 10,
  },
});
