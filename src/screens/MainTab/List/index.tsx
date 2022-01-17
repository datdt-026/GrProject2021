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
        horizontal={false}
        scrollEnabled={false}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 0.5,
            }}>
            <Text style={styles.row}>{item.id}</Text>
            {/* <Image
              style={{
                width: 240,
                height: 200,
                borderRadius: 10,
                borderColor: 'black',
              }}
              source={{uri: `${item.src}`}}
            /> */}
            <Text style={styles.row}>{item.name}</Text>
            <Text style={styles.row}>{item.age}</Text>
            <Text style={styles.row}>{item.address}</Text>
            <Text style={styles.row}>{item.phone}</Text>
          </View>
        )}
      />
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
