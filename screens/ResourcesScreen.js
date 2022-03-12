import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Dimensions,
} from "react-native";

export default function ResourcesScreen() {
  function goToSite(title) {
    if (title == "raiSE Publications") {
      Linking.openURL("http://www.raise.sg/raise-publications.html");
    } else if (title == "Guides and Toolkits") {
      Linking.openURL("http://www.raise.sg/guides-toolkits.html");
    } else if (title == "Opinion Pieces") {
      Linking.openURL("http://www.raise.sg/opinion-pieces.html");
    } else if (title == "Useful Links") {
      Linking.openURL("http://www.raise.sg/useful-links.html");
    } else {
      return null;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginHorizontal: 30, marginTop: 20 }}>
        Resources
      </Text>
      <View
        style={[
          styles.container,
          {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <TouchableOpacity
          style={styles.box}
          onPress={() => goToSite("raiSE Publications")}
        >
          <Text style={styles.boxText}>raiSE Publications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => goToSite("Guides and Toolkits")}
        >
          <Text style={styles.boxText}>Guides and Toolkits</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.container,
          { flexDirection: "row", justifyContent: "space-evenly" },
        ]}
      >
        <TouchableOpacity
          style={styles.box}
          onPress={() => goToSite("Opinion Pieces")}
        >
          <Text style={styles.boxText}>Opinion Pieces</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => goToSite("Useful Links")}
        >
          <Text style={styles.boxText}>Useful Links</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  box: {
    aspectRatio: 1,
    width: (Dimensions.get("window").width - 80) / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE3B8",
    padding: 20,
  },
  boxText: {
    fontSize: 15,
    textAlign: "center",
  },
});
