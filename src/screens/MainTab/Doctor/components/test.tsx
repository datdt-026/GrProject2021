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
  import {IDoctor} from '../../../../data/inforDoctor';
  import doc_urls from '../../../../config/Doctor';
  
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
  
    const renderPosts = ({ item }) => {
      return (
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
      )
    }
  
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          renderItem={renderPosts}
        />
      </View>
    );
  };
  
  export default Card;
  
  const styles = StyleSheet.create({});
  