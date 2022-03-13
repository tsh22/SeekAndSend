import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

export default function ChatListScreen({ navigation }) {
  const [chats, setChats] = useState([
    {
      id: 0,
      name: "Paul, Tan",
      company: "Dew This Inc, Operations Manager",
      preview:
        "Thank you! It was amazing talking to you. Let’s keep in touch for sure!",
    },
    {
      id: 1,
      name: "Sum Ting, Wong",
      company: "Dew That Inc, Operations Manager",
      preview: "Thank you!",
    },
    {
      id: 2,
      name: "Bert, Dae",
      company: "Dew Everything Inc, Operations Manager",
      preview: "Thanks! :)",
    },
  ]);

  function ListChats({ item }) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#F1F1F1",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
        onPress={() =>
          navigation.navigate("Chat Screen", {
            name: item.name,
            preview: item.preview,
          })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="person-circle-sharp"
            size={50}
            color="black"
            style={{ marginRight: 5 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.name}
            </Text>
            <Text style={styles.greyItalics}>{item.company}</Text>
            <Text style={{ fontSize: 16, marginVertical: 5 }} numberOfLines={1}>
              {item.preview}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}>Chats</Text>
      <BackButton />

      <FlatList
        data={chats}
        renderItem={({ item }) => <ListChats item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  greyItalics: {
    color: "grey",
    fontStyle: "italic",
  },
});
