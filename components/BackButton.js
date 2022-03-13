import React, { useContext, useEffect, useState, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
      }}
      onPress={() => navigation.goBack()}
    >
      <Entypo name="chevron-left" size={24} color="black" />
      <Text style={{ fontSize: 15 }}>Back</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
