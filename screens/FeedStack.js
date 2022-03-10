import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreatePostScreen from "./CreatePostScreen";
import FeedScreen from "./FeedScreen";

const Stack = createStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator options={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Feed Screen"
        component={FeedScreen}
        // options={{ title: "Feed", headerShown: false }}
      />
      <Stack.Screen
        name="Create Post Screen"
        component={CreatePostScreen}
        // options={{ title: "Feed", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
