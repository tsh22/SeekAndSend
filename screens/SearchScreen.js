import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import BackButton from "../components/BackButton";
import _ from "lodash";

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [feedPosts, setFeed] = useState([
    {
      id: 0,
      name: "Sum Ting, Wong",
      industry: "All",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 9,
      comments: 5,
      title: "Where do you find resources to help with budget planning?",
      content: "Any links or referrals or direct messages would help!",
    },
    {
      id: 1,
      name: "Mee Saw, Tang",
      industry: "Sustainability",
      tags: ["Advice", "Sustainability"],
      liked: false,
      likes: 20,
      comments: 5,
      title:
        "What are some pitfalls you faced incoporating sustainability practices in your workplace?",
      content:
        "For example, having to enforce the practices, the potential costs that come with incorporating such practices. Would be helpful if we could get an idea of how you avoided these pitfalls too.",
    },
    {
      liked: false,
      id: 2,
      name: "Ken, Chin",
      industry: "Community Engagement",
      tags: ["Advice", "Finance", "Manpower"],
      liked: false,
      likes: 17,
      comments: 5,
      title: "How do you guys find volunteers to help out at events?",
      content:
        "Ever since COVID-19 there has been a huge drop in volunteers that we have been able to call upon. Anyone have tips on how to better engage volunteers to help out in these trying times?",
    },
  ]);
  const [filteredList, setFilteredList] = useState([]);

  const contains = (name, query) => {
    const formattedName = name.toLowerCase();
    if (formattedName.includes(query)) {
      return true;
    }
    return false;
  };

  function handleSearch(query) {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredList = _.filter(feedPosts, (item) => {
      return (
        contains(item.industry, formattedQuery) ||
        contains(listTags(item.tags), formattedQuery)
      );
    });
    setFilteredList(filteredList);
  }

  function listTags(tags) {
    var tagString = "";
    for (var i = 0; i < tags.length; i++) {
      if (i == tags.length - 1) {
        tagString += tags[i];
      } else {
        tagString = tags[i] + ", ";
      }
    }
    return tagString;
  }

  function ListFeed({ item }) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#F1F1F1",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
        onPress={() =>
          navigation.navigate("Clicked Post", {
            name: item.name,
            industry: item.industry,
            tags: listTags(item.tags),
            liked: item.liked,
            likes: item.likes,
            comments: item.comments,
            title: item.title,
            content: item.content,
            isUrgent: false,
          })
        }
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={styles.greyItalics}>Industry: {item.industry}</Text>
        <Text style={styles.greyItalics}>Tags: {listTags(item.tags)}</Text>
        <Text style={{ fontSize: 16 }} numberOfLines={2}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
            justifyContent: "flex-end",
          }}
        ></View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}>
          Search
        </Text>
        <BackButton />
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => handleSearch(query)}
          value={searchQuery}
          style={{ marginTop: 10 }}
        />
        <FlatList
          data={filteredList}
          renderItem={({ item }) => <ListFeed item={item} />}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 10 }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
});
