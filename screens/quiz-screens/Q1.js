import React, { useEffect, useState, useCallback, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Q1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Quiz Q1</Text>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>I am...</Text>
      </View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select1aQ2")}
      >
        <Text style={styles.optionText}>
          Interested in social entrepreneurship
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select1bQ3")}
      >
        <Text style={styles.optionText}>An existing social enterprise</Text>
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
});
