import React, { useEffect, useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Select1bQ3({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Quiz Q2</Text>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>My business is in...</Text>
      </View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select3a")}
      >
        <Text style={styles.optionText}>The seed stage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select3b")}
      >
        <Text style={styles.optionText}>The early stage </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select3c")}
      >
        <Text style={styles.optionText}>The growth stage </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, { marginBottom: 70 }]}
        onPress={() => navigation.navigate("Select3d")}
      >
        <Text style={styles.optionText}>The mature stage </Text>
      </TouchableOpacity>
    </ScrollView>
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
});
