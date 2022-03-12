import React, { useEffect, useState, useCallback, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Select1aQ2({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Quiz Q2</Text>
      <View style={styles.titleBox}>
        <Text style={styles.titleText}>I am interested in...</Text>
      </View>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select2a")}
      >
        <Text style={styles.optionText}>
          Learning more about social entrepreneurship
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.navigate("Select2b")}
      >
        <Text style={styles.optionText}>
          Implementing my own ideas from scratch
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, { marginBottom: 70 }]}
        onPress={() => navigation.navigate("Select2c")}
      >
        <Text style={styles.optionText}>
          Expanding my current business into a social enterprise
        </Text>
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
