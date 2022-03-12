import React, { useEffect, useState, useCallback, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function QuizModal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>Not sure of which event to join?</Text>
      <Text style={styles.smallText}>Take our mini quiz to find out!</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Q1")}
        >
          <Text style={styles.buttonText}>Take Quiz!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#D69A3C",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  bigText: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 10,
  },
  smallText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 30,
  },
});
