import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;

const Card = () => {
  return (
    <View>
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
          }}>
          <Image
            source={require('../../../../../zau.jpg')}
            style={{marginLeft: 16, width: 60, height: 60}}
          />
          <View style={{marginLeft: 16}}>
            <Text
              style={{
                color: '#09051C',
                fontSize: 15,
                fontWeight: '400',
                lineHeight: 19.6,
              }}>
              Chikanso Chima
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
                Ophthalmologist
              </Text>
              <TouchableOpacity style={{marginLeft: 70}}>
                <Text>Buy Again</Text>
              </TouchableOpacity>
            </View>

            <Text> ⦿ 68km away</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
