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
import MessengerDocItem from "./MessDocitem";
import { TextInput } from "react-native-gesture-handler";


function MessengerDoc(props) {
  const [typedText, setTypedText] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: true,
      isSender: false,
      messenger: "Chao Hieu",
      timestamp: 1641654238000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: true,
      messenger: "Chao cai gi",
      timestamp: 1641654298000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: true,
      messenger: "Nay em dau phoi qua...",
      timestamp: 1641654538000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: true,
      isSender: false,
      messenger: "Uk",
      timestamp: 1641654598000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: false,
      isSender: false,
      messenger: "Hut it thuoc thoi!",
      timestamp: 1641654598000,
    },
    {
        url: "https://randomuser.me/api/portraits/men/50.jpg",
        showUrl: false,
        isSender: false,
        messenger: "The nhe",
        timestamp: 1641654598000,
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
          <MessengerDocItem
            onPress={() => {
              alert('Bac si Hieu');
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
            paddingStart: 10,
          }}
          placeholder="Enter your message here"
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
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>;
}
export default MessengerDoc;