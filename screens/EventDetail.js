import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BackButton from "../components/BackButton";

export default function EventDetail({ navigation, route }) {
  const { date, title, time, price, isEnrolled } = route.params;

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <Text style={{ fontSize: 30, textAlign: "center", marginVertical: 20 }}>
        {title}
      </Text>
      {isEnrolled ? (
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "#D69A3C",
            padding: 10,
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Enrolled!</Text>
        </View>
      ) : (
        <TouchableOpacity
          style={{
            borderRadius: 20,
            backgroundColor: "#D69A3C",
            padding: 10,
            alignSelf: "center",
            marginVertical: 20,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Sign Up!</Text>
        </TouchableOpacity>
      )}
      <View style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Time:</Text>
        <Text style={{ textAlign: "center" }}>{time}</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Price:</Text>
        <Text style={{ textAlign: "center" }}>{price}</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Venue:</Text>
        <Text style={{ textAlign: "center" }}>
          Online - Zoom (Zoom link updating soon!)
        </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Details:</Text>
        <Text style={{ textAlign: "center" }}>
          Are you a founder or key decision maker of a social enterprise finding
          it challenging to balance the social and business objectives? Are you
          facing personal challenges in leading your enterprise, or looking to
          scale your organisation?{"\n"}If your answer is yes, we have something
          to offer!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
