import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

function ChatItem(props) {
  let { name, url, message, numberOfUnreadMessages, time, userId } = props.user; //destructuring an object
  const { onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 80,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: "row",
      }}
    >
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: "cover",
              borderRadius: 25,
              marginRight: 15,
              marginStart: 10,
            }}
            source={{
              uri: url,
            }}
          />
          {numberOfUnreadMessages > 0 && (
            <Text
              style={{
                backgroundColor: "red",
                position: "absolute",
                right: 7,
                borderRadius: 10,
                paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
                color: "white",
              }}
            >
              {numberOfUnreadMessages}
            </Text>
          )}
        </View>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: "black",
            }}
          >
            {message}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: "black",
              marginRight: 10,
            }}
          >
            {time}
          </Text>
        </View>
    </TouchableOpacity>
  );
}
export default ChatItem;
