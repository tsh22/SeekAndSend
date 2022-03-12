import React, { useState, useCallback, useEffect, useContext } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { UserContext } from "../assets/UserContext";
import { Ionicons } from "@expo/vector-icons";

export default function ChatScreen({ route }) {
  const { name, preview } = route.params;
  const [messages, setMessages] = useState([]);
  const username = useContext(UserContext);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: preview,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: name,
          avatar: "https://placeimg.com/140/140/any",
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
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      renderUsernameOnMessage={true}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
