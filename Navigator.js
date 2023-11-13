import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import {
  BellIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import UserProfileScreen from "./screens/UserProfileScreen";
import FirstGetStartedScreen from "./screens/FirstGetStartedScreen";
import SecondGetStartedScreen from "./screens/SecondGetStartedScreen";
import ThirdGetStartedScreen from "./screens/ThirdGetStartedScreen";
import MainGetStartedScreen from "./screens/MainGetStartedScreen";
import TinderScreen from "./screens/TinderScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 75 },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HomeIcon size={28} color={focused ? "#FF7D1B" : "#212121"} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tinder"
        component={TinderScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <HeartIcon size={28} color={focused ? "#FF7D1B" : "#212121"} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BellIcon size={28} color={focused ? "#FF7D1B" : "#212121"} />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <UserIcon size={28} color={focused ? "#FF7D1B" : "#212121"} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstGetStarted"
        component={FirstGetStartedScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="SecondGetStarted"
        component={SecondGetStartedScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="ThirdGetStarted"
        component={ThirdGetStartedScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="MainGetStarted"
        component={MainGetStartedScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false, animation: "slide_from_right" }}
      />
      <Stack.Screen
        name="TinderScreen"
        component={TabNavigator}
        options={{ headerShown: false, animation: "simple_push" }}
      />
    </Stack.Navigator>
  );
};
