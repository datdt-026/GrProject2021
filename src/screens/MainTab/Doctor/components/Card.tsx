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
import React from 'react';
import ModalTester from './Modal';
import {IDoctor} from '../../../../data/inforDoctor';
import doc_urls from '../../../../config/Doctor';

const width = Dimensions.get('window').width;

const DATA = [
  {
    id: 0,
    name: 'Bac Si Hai',
    img: require('../../../../../zau.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
  {
    id: 1,
    name: 'Bac Si Link',
    img: require('../../../../../3.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
  {
    id: 2,
    name: 'Bac Si Hieu',
    img: require('../../../../../zau.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
  {
    id: 3,
    name: 'Bac Si Dung',
    img: require('../../../../../zau.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
  {
    id: 4,
    name: 'Bac Si Damn son',
    img: require('../../../../../zau.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
  {
    id: 5,
    name: 'Bac Si Damn son',
    img: require('../../../../../zau.jpg'),
    job: 'Pulmonologist',

    phone: '0973471150',
  },
];

const Card = () => {
  const [data, setData] = React.useState<IDoctor[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(doc_urls.doctor)
      .then(response => response.json())
      .then(doctors => {
        console.log('json', doctors);
        setData(doctors);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                width: 347,
                height: 103,
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                marginHorizontal: 24,
                marginTop: 12,
                marginBottom: 12,
              }}>
              <Image
                source={{uri: `${item.img}`}}
                style={{
                  marginLeft: 16,
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{
                    color: '#09051C',
                    fontSize: 15,
                    fontWeight: '400',
                    lineHeight: 19.6,
                  }}>
                  {item.name}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#3B3B3B',
                      opacity: 0.3,
                    }}>
                    {item.job}
                  </Text>
                </View>

                <Text> {item.phone}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
