import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ProgressBar } from "react-native-paper";
import { UserContext } from "../assets/UserContext";

export default function AccountScreen({ navigation }) {
  const username = useContext(UserContext);

  const exp = "20 / 100";

  return (
    <View style={{ flex: 1, flex: 1, backgroundColor: "white", padding: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate("Login Screen")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Logout</Text>
        </TouchableOpacity>
        <View style={[styles.centered, { marginTop: 50 }]}>
          <Ionicons name="person-circle-sharp" size={100} color="black" />
          <Text style={{ fontSize: 30 }}>{username}</Text>
        </View>
        <ProgressBar
          progress={eval(exp)}
          color="#D69A3C"
          style={{ marginHorizontal: 20 }}
        />
        <View style={styles.centered}>
          <Text style={{ fontSize: 30, color: "#D69A3C" }}>Tier 5</Text>
          <Text>{exp} EXP</Text>
        </View>
        <View
          style={{
            backgroundColor: "#F1F1F1",
            borderRadius: 10,
            padding: 20,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Current benefits:
          </Text>
          <Text>{`\u2022`} Make 'Urgent' type posts</Text>
          <Text>{`\u2022`} 10% off any training courses enrolled</Text>
        </View>
        <View
          style={{ backgroundColor: "#F1F1F1", borderRadius: 10, padding: 20 }}
        >
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Upcoming benefits:
          </Text>
          <Text>{`\u2022`} Urgent posts stay up longer</Text>
          <Text>{`\u2022`} 12% off any training courses enrolled</Text>
          <Text>
            {`\u2022`} Access to exclusive training courses at Tier 10
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    margin: 30,
  },
  logoutButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#D69A3C",
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
});
