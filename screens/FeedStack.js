import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ClickedPostScreen from "./ClickedPostScreen";
import CreatePostScreen from "./CreatePostScreen";
import FeedScreen from "./FeedScreen";

const Stack = createStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator options={{ gestureEnabled: false }}>
      <Stack.Screen
        name="Feed Screen"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create Post Screen"
        component={CreatePostScreen}
        options={{ title: "Create post" }}
      />
      <Stack.Screen
        name="Clicked Post"
        component={ClickedPostScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
