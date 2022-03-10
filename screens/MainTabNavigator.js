import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FeedStack from "./FeedStack";
import EventsStack from "./EventsStack";
import ResourcesScreen from "./ResourcesScreen";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator({ route }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Events") {
            iconName = focused ? "calendar-sharp" : "calendar-outline";
          } else if (route.name === "Resources") {
            iconName = focused ? "book-sharp" : "book-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-sharp" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveBackgroundColor: "#FFE3B3",
        tabBarActiveBackgroundColor: "#FFE3B3",
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "#D69A3C",
      })}
    >
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Events" component={EventsStack} />
      <Tab.Screen name="Resources" component={ResourcesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
