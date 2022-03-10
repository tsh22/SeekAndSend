import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Seek&Send"}</Text>
      <Text style={styles.text}>(Logo goes here)</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login Screen")}
      >
        <Text style={styles.buttonText}>Sign in</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#D69A3C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  text: {
    fontSize: 30,
  },
});
