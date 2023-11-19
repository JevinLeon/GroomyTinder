import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationCard from "../components/NotificationCard";

const NotificationsScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-2xl font-bold ml-4">Notifications</Text>
      <ScrollView showsVerticalScrollIndicator={false} className="m-4">
        <NotificationCard
          title="Chat from Leny"
          description="Hey, what are you doing right now?"
        />
        <NotificationCard title="There are 2 new users nearby!" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
