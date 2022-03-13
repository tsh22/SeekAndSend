import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { ButtonGroup } from "react-native-elements";

export default function EventsScreen({ navigation }) {
  const [showOnly, setShow] = useState(null);
  // 0: My Events, 1: All Events
  const [filter, setFilter] = useState(0);
  const [myEvents, setMyEvents] = useState([
    {
      id: 0,
      date: "15 March",
      title: "raiSE Masterclass 2 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      numDate: "2022-03-15",
      isEnrolled: true,
    },
  ]);
  const [allEvents, setAllEvents] = useState([
    {
      id: 0,
      date: "1 March",
      title: "raiSE Masterclass 1 - Survive and Thrive in the Present",
      time: "1400 - 1600 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      numDate: "2022-03-01",
      isEnrolled: false,
    },
    {
      id: 1,
      date: "5 - 6 March",
      title: "Social Enterprise Development Fundamentals Workshop",
      time: "0900 - 1800 hrs",
      price: "$15/pax (provisional membership); $12/pax (membership)",
      numDate: "2022-03-05",
      isEnrolled: false,
    },
    {
      id: 2,
      date: "11 March",
      title: "Health x Social Care Industry Circle",
      time: "1000 - 1300 hrs",
      price: "$90/pax (provisional membership); $83/pax (membership)",
      numDate: "2022-03-11",
      isEnrolled: false,
    },
  ]);

  useEffect(() => {
    navigation.navigate("Quiz Modal");
  }, []);

  function renderEvents({ item }) {
    return (
      <TouchableOpacity
        style={[
          styles.eventItem,
          item.isEnrolled ? styles.darkYellow : styles.yellow,
        ]}
        onPress={() =>
          navigation.navigate("Event Detail", {
            date: item.date,
            title: item.title,
            time: item.time,
            price: item.price,
            isEnrolled: item.isEnrolled,
          })
        }
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16 }}>{item.date}</Text>
          </View>
          <View style={styles.lineBreak}></View>
          <View style={{ flex: 3 }}>
            {item.isEnrolled ? (
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Enrolled!
              </Text>
            ) : null}
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
            <Text style={styles.greyItalics}>Time: {item.time}</Text>
            <Text style={styles.greyItalics}>Price: {item.price}</Text>
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
      <Text style={{ fontSize: 30, marginTop: 20, marginLeft: 20 }}>
        Events
      </Text>
      <Calendar
        markingType={"period"}
        markedDates={{
          "2022-03-01": {
            color: "#FFF1D9",
            startingDay: true,
            endingDay: true,
          },
          "2022-03-05": {
            startingDay: true,
            color: "#FFF1D9",
          },
          "2022-03-06": {
            endingDay: true,
            color: "#FFF1D9",
          },
          "2022-03-11": {
            color: "#FFF1D9",
            startingDay: true,
            endingDay: true,
          },
          "2022-03-15": {
            color: "#FFC872",
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
      <ButtonGroup
        buttons={["My Events", "All Events"]}
        onPress={(value) => {
          setFilter(value);
        }}
        selectedIndex={filter}
        containerStyle={{ marginBottom: 10 }}
        selectedButtonStyle={{ backgroundColor: "#D69A3C" }}
      />
      {filter == 0 ? (
        <FlatList
          data={myEvents}
          renderItem={({ item }) => <Events item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <FlatList
          data={allEvents}
          renderItem={({ item }) => <Events item={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  lineBreak: {
    borderLeftColor: "#C5C5C5",
    borderLeftWidth: 2,
    marginHorizontal: 10,
  },
  greyItalics: {
    color: "grey",
    fontStyle: "italic",
    fontSize: 12,
  },
  yellow: {
    backgroundColor: "#FFF1D9",
  },
  darkYellow: {
    backgroundColor: "#FFE3B8",
  },
  eventItem: {
    backgroundColor: "#FFE3B8",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
