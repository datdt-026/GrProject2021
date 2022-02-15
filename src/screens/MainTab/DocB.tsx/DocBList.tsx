import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import DocItem from "./DocBItem";
import Header from "./Header";
/**
 - ListView from a map of objects
 - FlatList
 */
function DocBList(props) {
  //list of docs = state
  const [docs, setdocs] = useState([
    {
      name: "Dr.Khang Thai Nguyen",
      url: "https://tse3.mm.bing.net/th?id=OIP.W6xMgIWZJ7RYadFGkO1fiwHaHa&pid=Api",
      status: "Available",
      email: "khangthai276@gmail.com",
      phonenumber: "0987654321",
      address: "Ha Noi",
    },
    {
      name: "Doctor B",
      url: "https://tse3.mm.bing.net/th?id=OIP.W6xMgIWZJ7RYadFGkO1fiwHaHa&pid=Api",
      status: "Unavailable",
      email: "doctor_b@gmail.com",
    },
    {
      name: "Doctor C",
      url: "https://tse3.mm.bing.net/th?id=OIP.W6xMgIWZJ7RYadFGkO1fiwHaHa&pid=Api",
      status: "Unavailable",
      email: "doctor_c@gmail.com",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const filtereddocs = () =>
    docs.filter((eachDoc) =>
      eachDoc.name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Header />
      <View>
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 9,
          }}
        >
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => {
              setSearchText(text);
            }}
            style={{
              height: 40,
              flex: 1,
              marginEnd: 8,
              borderRadius: 5,
              opacity: 0.8,
              paddingStart: 30,
            }}
          />
        </View>
      </View>
      {filtereddocs().length > 0 ? (
        <FlatList
          data={filtereddocs()}
          renderItem={({ item }) => (
            <DocItem
              onPress={() => {
                alert(`You press item's name: ${item.name}`);
              }}
              food={item}
              key={item.name}
            />
          )}
          keyExtractor={(eachDoc) => eachDoc.name}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
            }}
          >
            No doctor found
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
export default DocBList;
