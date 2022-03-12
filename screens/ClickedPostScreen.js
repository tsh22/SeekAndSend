import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ClickedPostScreen({ route }) {
  //   const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>Hi i am the clicked post screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});
