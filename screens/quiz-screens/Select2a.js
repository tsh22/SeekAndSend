import React, { useEffect, useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function Select2a({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Quiz Results!</Text>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>We recommend...</Text>
      </View>
      <TouchableOpacity
        style={styles.option}
        onPress={() =>
          Linking.openURL(
            "https://www.raise.sg/social-enterprise-devlopment-fundamentals.html"
          )
        }
      >
        <Text style={styles.optionText}>
          Social Enterprise Development Fundamentals Workshop
        </Text>
        <Text style={styles.whiteItalics}>(Click to learn more!)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => Linking.openURL("https://www.raise.sg/industry.html")}
      >
        <Text style={styles.optionText}>Industry Circles</Text>
        <Text style={styles.whiteItalics}>(Click to learn more!)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Events Screen")}
      >
        <Text style={styles.buttonText}>Back to Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  titleBox: {
    backgroundColor: "#FFE3B3",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
  option: {
    backgroundColor: "#D69A3C",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  whiteItalics: {
    color: "white",
    fontStyle: "italic",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#D69A3C",
    marginVertical: 40,
    width: "50%",
    alignSelf: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
});
