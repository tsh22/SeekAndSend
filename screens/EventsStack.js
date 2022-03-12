import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import EventDetail from "./EventDetail";
import EventsScreen from "./EventsScreen";
import Q1 from "./quiz-screens/Q1";
import QuizModal from "./quiz-screens/QuizModal";
import Select1aQ2 from "./quiz-screens/Select1aQ2";
import Select1bQ3 from "./quiz-screens/Select1bQ3";
import Select2a from "./quiz-screens/Select2a";
import Select2b from "./quiz-screens/Select2b";
import Select2c from "./quiz-screens/Select2c";
import Select3a from "./quiz-screens/Select3a";
import Select3b from "./quiz-screens/Select3b";
import Select3c from "./quiz-screens/Select3c";
import Select3d from "./quiz-screens/Select3d";

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator options={{ gestureEnabled: false }}>
      <Stack.Group>
        <Stack.Screen
          name="Events Screen"
          component={EventsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Event Detail"
          component={EventDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Q1"
          component={Q1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select1aQ2"
          component={Select1aQ2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select1bQ3"
          component={Select1bQ3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select2a"
          component={Select2a}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select2b"
          component={Select2b}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select2c"
          component={Select2c}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select3a"
          component={Select3a}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select3b"
          component={Select3b}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select3c"
          component={Select3c}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Select3d"
          component={Select3d}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Quiz Modal"
          component={QuizModal}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
