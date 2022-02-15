import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";;
import ChatItem from "./chatlist";
import Header from "./Header";
function ChatDoc(props) {
  const [users, setUsers] = useState([
    {
         url: 'https://randomuser.me/api/portraits/men/1.jpg',
         name: 'Benh nhan A',
         message: 'Thank you very much!',
         numberOfUnreadMessages: 3,
         time: 'now'
     },
  ]);
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingStart: 10,
          }}
        >
        </View>
        <FlatList
          style={{}}
          data={users}
          renderItem={({ item }) => (
            <ChatItem
              onPress={() => {
                navigate("MessDoc");
              }}
              user={item}
              key={item.url}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
export default ChatDoc;
