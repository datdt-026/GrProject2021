import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Keyboard,
  SafeAreaView,
} from "react-native";
import MessengerItem from "./messengeritem";
import { TextInput } from "react-native-gesture-handler";


function Messenger(props) {
  const [typedText, setTypedText] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      url: "https://randomuser.me/api/portraits/men/1.jpg",
      showUrl: true,
      isSender: true,
      messenger: "Hello doctor",
      timestamp: 1641654238000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/13.jpg",
      showUrl: true,
      isSender: false,
      messenger: "Hello A",
      timestamp: 1641654298000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: false,
      messenger: "How are you feeling right now?",
      timestamp: 1641654538000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/1.jpg",
      showUrl: true,
      isSender: true,
      messenger: "I just sent you my DCOM picture",
      timestamp: 1641654598000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: false,
      isSender: true,
      messenger: "Can you check it for me, please?",
      timestamp: 1641654598000,
    },
    {
        url: "https://randomuser.me/api/portraits/men/50.jpg",
        showUrl: false,
        isSender: true,
        messenger: "Thank you very much!",
        timestamp: 1641654598000,
    },
    {
        url: "https://randomuser.me/api/portraits/men/13.jpg",
        showUrl: true,
        isSender: false,
        messenger: "Ok",
        timestamp: 1641654538000,
    },
  ]);
  const { navigate, goBack } = props.navigation;
  return <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <View
      style={{
        flexDirection: "column",
        flex: 1,
      }}
    >

      <FlatList
        style={{
          flex: 1,
        }}
        data={chatHistory}
        renderItem={({ item }) => (
          <MessengerItem
            onPress={() => {
              alert('Benh nhan A');
            }}
            item={item}
            key={`${item.timestamp}`}
          />
        )}
      />
      <View
        style={{
          height: 50,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          onChangeText={(typedText) => {
            setTypedText(typedText);
          }}
          style={{
            color: "black",
            borderWidth: 3,
            borderColor: '#E0E0E0',
            paddingStart: 10,
            marginLeft: 10,
            borderRadius: 7,
          }}
          placeholder="Enter your message here                                      "
          value={typedText}
          placeholderTextColor= 'grey'
        />
        <TouchableOpacity
          onPress={async () => {
            if (typedText.trim().length == 0) {
              return;
            }
          }}
        >
          <Image style= {{
            padding: 10,
            marginRight: 25, }}
            source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>;
}
export default Messenger;