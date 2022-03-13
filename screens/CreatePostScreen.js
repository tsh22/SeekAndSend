import React, { useEffect, useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import { UserContext } from "../assets/UserContext";
import BackButton from "../components/BackButton";

export default function CreatePostScreen({ navigation }) {
  const username = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [check, setCheck] = useState(false);
  const [openIndustry, setOpenIndustry] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [industry, setIndustry] = useState([
    { label: "Food & Beverage", value: "Food & Beverage" },
    { label: "Retail & Gifts", value: "Retail & Gifts" },
    { label: "Beauty Health & Wellness", value: "Beauty Health & Wellness" },
    { label: "Community Engagement", value: "Community Engagement" },
    { label: "Business Services", value: "Business Services" },
    { label: "Home Services", value: "Home Services" },
    { label: "Education & Training", value: "Education & Training" },
    { label: "Events Management", value: "Events Management" },
  ]);
  const [openTag, setOpenTag] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tag, setTag] = useState([
    { label: "Advice", value: "Advice" },
    { label: "Finance", value: "Finance" },
    { label: "Technology", value: "Technology" },
    { label: "COVID-19", value: "COVID-19" },
    { label: "Partnership", value: "Partnership" },
    { label: "Sustainability", value: "Sustainability" },
    { label: "Manpower", value: "Manpower" },
    { label: "Discussion", value: "Discussion" },
  ]);

  // Ensures only one of the 2 dropdowns are open at any one time
  const onIndustryOpen = useCallback(() => {
    setOpenTag(false);
  }, []);

  const onTagsOpen = useCallback(() => {
    setOpenIndustry(false);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}>
          Create Post
        </Text>
        <BackButton />
        <ScrollView style={styles.container}>
          <View style={styles.postBox}>
            <TextInput
              multiline
              placeholder="Title"
              style={{ flex: 1, fontSize: 20 }}
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
            <View style={styles.lineBreak} />
            <TextInput
              multiline
              placeholder="Write your post here"
              style={{ flex: 8, fontSize: 20 }}
              onChangeText={(text) => setContent(text)}
            ></TextInput>
          </View>
          <DropDownPicker
            open={openIndustry}
            value={selectedIndustry}
            items={industry}
            setOpen={setOpenIndustry}
            setValue={setSelectedIndustry}
            setItems={setIndustry}
            onOpen={onIndustryOpen}
            placeholder="Select an industry"
            bottomOffset={100}
            selectedItemContainerStyle={{
              backgroundColor: "#FFE3B3",
            }}
            style={{
              backgroundColor: "#FFC872",
              marginVertical: 20,
              borderWidth: 0,
            }}
          />
          <DropDownPicker
            multiple={true}
            min={1}
            open={openTag}
            value={selectedTags}
            items={tag}
            setOpen={setOpenTag}
            setValue={setSelectedTags}
            setItems={setTag}
            onOpen={onTagsOpen}
            placeholder="Select at least 1 tag"
            bottomOffset={100}
            selectedItemContainerStyle={{
              backgroundColor: "#FFE3B3",
            }}
            style={{
              backgroundColor: "#FFC872",
              borderWidth: 0,
              marginBottom: 20,
            }}
          />
          <CheckBox
            center
            iconRight
            title="Urgent Listing"
            checked={check}
            onPress={() => setCheck(!check)}
            checkedColor="#FFE3B3"
            uncheckedColor="#FFE3B3"
            containerStyle={{ backgroundColor: "#FFC872", borderRadius: 10 }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Feed Screen", {
                name: username,
                industry: selectedIndustry,
                tags: selectedTags,
                liked: false,
                likes: 0,
                comments: 0,
                title: title,
                content: content,
                isUrgent: check,
              })
            }
          >
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  postBox: {
    backgroundColor: "#F1F1F1",
    height: 300,
    padding: 20,
    borderRadius: 5,
  },
  lineBreak: {
    borderBottomColor: "#C5C5C5",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#D69A3C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginVertical: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
