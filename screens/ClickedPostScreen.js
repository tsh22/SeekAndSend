import React, { useContext, useEffect, useState, useRef } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../assets/UserContext";
import { AntDesign } from "@expo/vector-icons";

export default function ClickedPostScreen({ route }) {
  const username = useContext(UserContext);
  const textInput = useRef(null);

  const [comment, setComment] = useState("");
  const [isLiked, setLiked] = useState(liked);
  const [listComments, setList] = useState([
    {
      id: 0,
      name: "Paul, Tan",
      tier: "Tier 1",
      comment:
        "Make sure to keep track of your financial records to constantly stay on top of your cash. These include receipts for your customers, all of your invoices, both ones you have issued for payment and those that you have paid.",
      likes: 10,
      liked: false,
    },
    {
      id: 1,
      name: "Sum Ting, Wong",
      tier: "Tier 3",
      comment:
        "Be sure to manage your cashflow properly if you work with creditors and their payment terms. E.g. a supplier might need to be paid in 10 days for their invoice while others might require 30 days payment. Negotiating with your creditors could save you money and allow you to plan your cash better.",
      likes: 8,
      liked: false,
    },
    {
      id: 2,
      name: "Lee, Mark",
      tier: "Tier 2",
      comment: "Feel free to contact me directly, I'll be happy to help!",
      likes: 2,
      liked: false,
    },
    {
      id: 3,
      name: "Sam, Sung",
      tier: "Tier 1",
      comment: "I would like to know too!",
      likes: 1,
      liked: false,
    },
    {
      id: 4,
      name: "Pan, Tan",
      tier: "Tier 9",
      comment: "I appreciate all the good advice here!",
      likes: 1,
      liked: false,
    },
  ]);
  var {
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

  function ListComments({ item, index }) {
    useEffect(() => {
      setId(null);
    }, []);
    return (
      <View style={[styles.commentBox, isUrgent ? styles.yellow : styles.grey]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person-circle-sharp" size={50} color="black" />
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.name}
            </Text>
            <Text style={styles.greyItalics}>{item.tier}</Text>
          </View>
        </View>
        <Text style={[styles.greyItalics, { marginVertical: 5 }]}>
          {item.comment}
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
            {item.likes} likes
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
      </View>
    );
  }

  function addComment() {
    setList([
      {
        id: `${listComments.length}`,
        name: username,
        tier: "Tier 10",
        comment: comment,
        likes: 0,
      },
      ...listComments,
    ]);
    setComment("");
    comments += 1;
  }

  // Handler when a post is liked
  const [changedId, setId] = useState(null);
  function likePost({ item, index }) {
    setId(index);
    let comments = listComments;
    let targetComment = comments[index];
    // Flip the 'liked' property of the targetPost
    targetComment.liked = !targetComment.liked;
    if (targetComment.liked) {
      targetComment.likes += 1;
    } else {
      targetComment.likes -= 1;
    }
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.mainPostBox,
            isUrgent ? styles.darkYellow : styles.darkGrey,
          ]}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
          <Text style={styles.greyItalics}>{industry}</Text>
          <Text style={styles.greyItalics}>{tags}</Text>
          <Text style={{ fontSize: 16 }}>{title}</Text>
          <Text style={styles.greyItalics}>{content}</Text>
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
              {likes} likes, {comments} comments
            </Text>
            <TouchableOpacity
              onPress={() => {
                setLiked(!isLiked);
              }}
              style={{ marginHorizontal: 10 }}
            >
              {isLiked ? (
                <AntDesign name="heart" size={30} color="black" />
              ) : (
                <AntDesign name="hearto" size={30} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <TextInput
          multiline
          placeholder="Leave a comment..."
          style={[
            styles.textInputBox,
            isUrgent ? styles.inputYellow : styles.inputGrey,
          ]}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity
          onPress={() => addComment()}
          style={[
            styles.submitButton,
            isUrgent ? styles.darkYellow : styles.darkGrey,
          ]}
        >
          <Text style={{ color: "white" }}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 30, marginHorizontal: 10, marginTop: 20 }}>
        Comments
      </Text>

      <FlatList
        extraData={changedId}
        data={listComments}
        renderItem={({ item, index }) => (
          <ListComments item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  mainPostBox: {
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  greyItalics: {
    color: "grey",
    fontStyle: "italic",
  },
  yellow: {
    backgroundColor: "#FFE3B3",
  },
  grey: {
    backgroundColor: "#F1F1F1",
  },
  darkYellow: {
    backgroundColor: "#FFC872",
  },
  darkGrey: {
    backgroundColor: "#B8B8B8",
  },
  inputYellow: {
    borderColor: "#FFC872",
  },
  inputGrey: {
    borderColor: "#B8B8B8",
  },
  commentBox: {
    backgroundColor: "#F1F1F1",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  textInputBox: {
    fontSize: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 5,
    flex: 5,
  },
  submitButton: {
    flex: 1,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
