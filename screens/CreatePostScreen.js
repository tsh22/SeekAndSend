import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function CreatePostScreen() {
  return (
    <View style={styles.container}>
      <Text>Hi i am the post creation screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
});
