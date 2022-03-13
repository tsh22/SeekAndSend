import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome back! </Text>

        <TextInput
          label="Username"
          value={username}
          onChangeText={(text) => setUser(text)}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          mode="outlined"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Main Tab Navigator", { username: username })
          }
        >
          <Text style={styles.buttonText}>Sign in</Text>
          <Entypo name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.enquiryText}>
          For any enquiries, drop us an email at contactenquiries@raise.sg
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#D69A3C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  text: {
    fontSize: 30,
  },
  enquiryText: {
    textAlign: "center",
    marginTop: 30,
    color: "grey",
    fontStyle: "italic",
  },
  input: {
    // height: 60,
    marginVertical: 10,
  },
});
