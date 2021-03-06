import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ChatListScreen from "./ChatListScreen";
import ChatScreen from "./ChatScreen";
import ClickedPostScreen from "./ClickedPostScreen";
import CreatePostScreen from "./CreatePostScreen";
import FeedScreen from "./FeedScreen";
import SearchScreen from "./SearchScreen";

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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Clicked Post"
        component={ClickedPostScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat List Screen"
        component={ChatListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
