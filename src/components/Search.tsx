import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchComponent = ({onSearchEnter}) => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.searchWrapperStyle}>
      <Image
        source={require('../assets/search.png')}
        style={{
          width: 18,
          height: 18,
          marginTop: 8,
          marginRight: 12,
          marginLeft: 9,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="grey"
        style={styles.searchInputStyle}
        value={term}
        onChangeText={newText => {
          setTerm(newText);
        }}
        onEndEditing={() => {
          onSearchEnter(term);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          setTerm('');
          onSearchEnter('');
        }}>
        <Image
          source={require('../assets/close.png')}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    marginTop: 10,
    marginLeft: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginRight: 20,
  },
  iconStyle: {
    marginTop: 3,
    marginHorizontal: 8,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 0,
    margin: 0,
    color: 'black',
  },
});

export default SearchComponent;
