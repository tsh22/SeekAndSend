import React, { useState, useCallback, useEffect, useContext } from "react";
import { GiftedChat, Avatar } from "react-native-gifted-chat";
import { UserContext } from "../assets/UserContext";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

export default function ChatScreen({ navigation, route }) {
  const { name, preview } = route.params;
  const [messages, setMessages] = useState([]);
  const { username } = useContext(UserContext);

  useEffect(() => {
    if (preview == "") {
    } else {
      setMessages([
        {
          _id: 1,
          text: preview,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: name,
          },
        },
        {
          _id: 2,
          text: "Hello! I find it useful to check raiSE's website for training resources :)",
          createdAt: new Date(),
          user: {
            _id: 1,
          },
        },
        {
          _id: 3,
          text: "Hello there! I was looking for trainings, where do I find them?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: name,
          },
        },
      ]);
    }
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FFE3B3",
          padding: 10,
          flexDirection: "row",
        }}
      >
        <BackButton />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Chat: {name}</Text>
      </View>
      <GiftedChat
        renderUsernameOnMessage={true}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: username,
        }}
        showAvatarForEveryMessage={true}
      />
    </View>
  );
}
