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
function Chat(props) {
  const [users, setUsers] = useState([
    {
         url: 'https://randomuser.me/api/portraits/men/80.jpg',
         name: 'Bac si Hieu',
         message: 'The nhe',
         numberOfUnreadMessages: 3,
         time: 'now'
     },
     {
     url: 'https://randomuser.me/api/portraits/men/70.jpg',
         name: 'Bac si Dat',
         message: 'noi it thoi',
         numberOfUnreadMessages: 1,
         time: '5 minutes'
     }
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
                //alert(`You press item's name: ${item.name}`)
                navigate("Messenger");
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
export default Chat;
