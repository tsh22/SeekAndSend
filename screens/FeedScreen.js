import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../assets/UserContext";
import { LogBox } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ButtonGroup } from "react-native-elements";

export default function FeedScreen({ navigation, route }) {
  useEffect(() => {
    if (route.params != undefined) {
      const {
        name,
        industry,
        tags,
        liked,
        likes,
        comments,
        title,
        content,
        isUrgent,
      } = route.params;
      if (isUrgent) {
        setUrgent([
          {
            id: `${urgentPosts.length}`,
            name: name,
            industry: industry,
            tags: tags,
            liked: liked,
            likes: likes,
            comments: comments,
            title: title,
            content: content,
          },
          ...urgentPosts,
        ]);
      } else {
        setFeed([
          {
            id: `${feedPosts.length}`,
            name: name,
            industry: industry,
            tags: tags,
            liked: liked,
            likes: likes,
            comments: comments,
            title: title,
            content: content,
          },
          ...feedPosts,
        ]);
      }
    }
  }, [route.params]);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  // 0: My Feed, 1: Popular
  const [filter, setFilter] = useState(0);
  const [urgentPosts, setUrgent] = useState([
    {
      id: 0,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 10,
      comments: 5,
      title: "Do you have any advice to help with budget planning?",
      content:
        "Covid-19 has hit us hard and we’re struggling especially in the financial department. In the worst case scenario, we would definitely have to let a few of our staff go. But we would definitely like to find alternatives before even considering that option.",
    },
    {
      id: 1,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 10,
      comments: 5,
      title: "Advice on government funding for Arts events",
      content:
        "We are looking to organise Arts events in Singapore. Looking for advice regarding government funding. What is the success rate of applying for...",
    },
    {
      liked: false,
      id: 2,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 10,
      comments: 5,
      title: "Advice on government funding for Arts events",
      content:
        "We are looking to organise Arts events in Singapore. Looking for advice regarding government funding. What is the success rate of applying for...",
    },
  ]);

  const [feedPosts, setFeed] = useState([
    {
      id: 0,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 9,
      comments: 5,
      title: "Do you have any advice to help with budget planning?",
      content:
        "Covid-19 has hit us hard and we’re struggling especially in the financial department. In the worst case scenario, we would definitely have to let a few of our staff go. But we would definitely like to find alternatives before even considering that option.",
    },
    {
      id: 1,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 20,
      comments: 5,
      title: "Advice on government funding for Arts events",
      content:
        "We are looking to organise Arts events in Singapore. Looking for advice regarding government funding. What is the success rate of applying for...",
    },
    {
      liked: false,
      id: 2,
      name: "John, Doe",
      industry: "Arts",
      tags: ["Advice", "Finance"],
      liked: false,
      likes: 17,
      comments: 5,
      title: "Advice on government funding for Arts events",
      content:
        "We are looking to organise Arts events in Singapore. Looking for advice regarding government funding. What is the success rate of applying for...",
    },
  ]);

  const sortedPosts = { ...feedPosts };

  const username = useContext(UserContext);

  // Iterate through the tags and return them as a string
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

  // Handler when a post is liked
  const [changedId, setId] = useState(null);
  function likePost({ item, index }) {
    setId(index);
    let posts = feedPosts;
    let targetPost = posts[index];
    // Flip the 'liked' property of the targetPost
    targetPost.liked = !targetPost.liked;
    if (targetPost.liked) {
      targetPost.likes += 1;
    } else {
      targetPost.likes -= 1;
    }
  }

  // Sort posts based on likes
  function compareLikes(a, b) {
    if (a.likes < b.likes) {
      return 1;
    }
    if (a.likes > b.likes) {
      return -1;
    }
    return 0;
  }

  function compareTime(a, b) {
    if (a.id < b.id) {
      return 1;
    }
    if (a.id > b.id) {
      return -1;
    }
    return 0;
  }

  function ListUrgent({ item }) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#FFF3DF",
          padding: 10,
          margin: 10,
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
            isUrgent: true,
          })
        }
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
        <Text style={styles.greyItalics}>{item.industry}</Text>
        <Text style={styles.greyItalics}>{listTags(item.tags)}</Text>
        <Text style={{ fontSize: 16 }} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.greyItalics} numberOfLines={3}>
          {item.content}
        </Text>
      </TouchableOpacity>
    );
  }

  function ListFeed({ item, index }) {
    useEffect(() => {
      setId(null);
    }, []);

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
        <Text style={styles.greyItalics}>{item.industry}</Text>
        <Text style={styles.greyItalics}>{listTags(item.tags)}</Text>
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
        >
          <Text
            style={{
              color: "grey",
              fontStyle: "italic",
              textAlign: "right",
            }}
          >
            {item.likes} likes, {item.comments} comments
          </Text>
          <TouchableOpacity
            onPress={() => likePost({ item, index })}
            style={{ marginHorizontal: 10 }}
          >
            {item.liked ? (
              <AntDesign name="heart" size={30} color="black" />
            ) : (
              <AntDesign name="hearto" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "white", paddingHorizontal: 10 }}>
        <View style={styles.heading}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 40, marginRight: 10 }}>
              Hi, {username}
            </Text>
            <Ionicons name="person-circle-sharp" size={60} color="black" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Chat List Screen")}
          >
            <Ionicons
              name="ios-chatbox-ellipses-outline"
              size={60}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity style={styles.filterButton}>
            <Text style={{ color: "white", fontSize: 16 }}>My feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={{ color: "white", fontSize: 16 }}>Popular</Text>
          </TouchableOpacity>
        </View> */}
        <ButtonGroup
          buttons={["Recent", "Popular"]}
          onPress={(value) => {
            setFilter(value);
          }}
          selectedIndex={filter}
          containerStyle={{ marginBottom: 20 }}
          selectedButtonStyle={{ backgroundColor: "#79694F" }}
        />
        <View
          style={{
            backgroundColor: "#FFE3B3",
            height: 250,
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, margin: 10 }}>
            URGENT
          </Text>
          <FlatList
            data={urgentPosts}
            renderItem={({ item }) => <ListUrgent item={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
        {filter == 0 ? (
          <FlatList
            extraData={changedId}
            data={feedPosts.sort(compareTime)}
            renderItem={({ item, index }) => (
              <ListFeed item={item} index={index} />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            extraData={changedId}
            data={feedPosts.sort(compareLikes)}
            renderItem={({ item, index }) => (
              <ListFeed item={item} index={index} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Create Post Screen")}
        >
          <Entypo name="plus" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#D69A3C",
    borderRadius: 50,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 10,
  },
  greyItalics: {
    color: "grey",
    fontStyle: "italic",
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    marginLeft: 5,
  },
  filterButton: {
    backgroundColor: "#79694F",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
});
