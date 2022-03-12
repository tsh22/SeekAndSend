import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";

export default function EventsScreen({ navigation }) {
  const [showOnly, setShow] = useState(null);

  const [events, setEvents] = useState([
    {
      id: 0,
      date: "1 March",
      title: "raiSE Masterclass 1 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      isEnrolled: false,
      numDate: "2022-03-01",
    },
    {
      id: 1,
      date: "5 - 6 March",
      title: "raiSE Masterclass 1 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      isEnrolled: false,
      numDate: "2022-03-05",
    },
    {
      id: 2,
      date: "11 March",
      title: "raiSE Masterclass 1 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      isEnrolled: false,
      numDate: "2022-03-11",
    },
    {
      id: 3,
      date: "15 March",
      title: "raiSE Masterclass 1 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      isEnrolled: false,
      numDate: "2022-03-15",
    },
  ]);

  useEffect(() => {
    navigation.navigate("Quiz Modal");
  }, []);

  function renderEvents({ item }) {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "#F1F1F1",
          padding: 10,
          marginVertical: 10,
          borderRadius: 5,
        }}
        onPress={() =>
          navigation.navigate("Event Detail", {
            date: item.date,
            title: item.title,
            time: item.time,
            price: item.price,
          })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              {item.date}
            </Text>
            <Text>{item.title}</Text>
            <Text>{item.time}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  function Events({ item }) {
    return renderEvents({ item });
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, margin: 20 }}>Events</Text>
      <Calendar
        markingType={"period"}
        markedDates={{
          "2022-03-01": {
            color: "#D69A3C",
            startingDay: true,
            endingDay: true,
          },
          "2022-03-05": {
            startingDay: true,
            color: "#D69A3C",
          },
          "2022-03-06": {
            endingDay: true,
            color: "#D69A3C",
          },
          "2022-03-11": {
            color: "#D69A3C",
            startingDay: true,
            endingDay: true,
          },
          "2022-03-15": {
            color: "#D69A3C",
            startingDay: true,
            endingDay: true,
          },
        }}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          setShow(day.dateString);
        }}
        monthFormat={"MMM yyyy"}
        hideExtraDays={true}
        firstDay={1}
        enableSwipeMonths={true}
      />
      <FlatList
        data={events}
        renderItem={({ item }) => <Events item={item} />}
        keyExtractor={(item) => item.id}
        // style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
