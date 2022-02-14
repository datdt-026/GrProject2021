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
import {IDoctor} from '../../../../data/inforDoctor';
import doc_urls from '../../../../config/Doctor';
import SearchComponent from '../../../../components/Search';
import axios from "axios";

const Card = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [term, setTerm] = useState("");

  const getData = (name) => {
    axios.get(`https://61a718ea8395690017be94dc.mockapi.io/Doctor?name=${name}`).then((res) => {
      if (res.data.length > 0) {
        setData(res.data);
      } else {
        setData([]);
        setErr("                                     No doctor found");
      }
    });
  };
  useEffect(() => {
    getData(term);
  }, [term]);

  const renderCard = ({ item }) => {
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
            keyExtractor={Doctor => Doctor.name}
          />
        }
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({});
