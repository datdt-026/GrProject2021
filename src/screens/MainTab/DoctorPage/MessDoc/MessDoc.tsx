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
      url: "https://randomuser.me/api/portraits/men/1.jpg",
      showUrl: true,
      isSender: false,
      messenger: "Hello doctor",
      timestamp: 1641654238000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/13.jpg",
      showUrl: true,
      isSender: true,
      messenger: "Hello Hieu",
      timestamp: 1641654298000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/70.jpg",
      showUrl: false,
      isSender: true,
      messenger: "How are you feeling right now?",
      timestamp: 1641654538000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/1.jpg",
      showUrl: true,
      isSender: false,
      messenger: "I just sent you my DCOM picture",
      timestamp: 1641654598000,
    },
    {
      url: "https://randomuser.me/api/portraits/men/50.jpg",
      showUrl: false,
      isSender: false,
      messenger: "Can you check it for me, please?",
      timestamp: 1641654598000,
    },
    {
        url: "https://randomuser.me/api/portraits/men/50.jpg",
        showUrl: false,
        isSender: false,
        messenger: "Thank you very much!",
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
            source={require('../../../../assets/send.png')} />
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>;
}
export default MessengerDoc;