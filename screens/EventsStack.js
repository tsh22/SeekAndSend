import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreatePostScreen from "./CreatePostScreen";
import EventsScreen from "./EventsScreen";
import FeedScreen from "./FeedScreen";

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator options={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Events Screen"
        component={EventsScreen}
        // options={{ title: "Feed", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
