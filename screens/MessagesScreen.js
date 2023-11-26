import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import MessageCard from "../components/MessageCard";

const MessagesScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 px-8">
      <View className="flex-row items-center py-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Messages</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="py-4">
        <MessageCard
          img={
            <Image
              source={require("../assets/main-card-img.jpg")}
              resizeMode="cover"
              className="w-16 h-16 rounded-full"
            />
          }
          name="Leny"
          message="Hey, what are you doing right now?"
        />
        <MessageCard
          img={
            <Image
              source={require("../assets/main-card-img.jpg")}
              resizeMode="cover"
              className="w-16 h-16 rounded-full"
            />
          }
          name="Leny"
          message="Hey, what are you doing right now?"
        />
        <MessageCard
          img={
            <Image
              source={require("../assets/main-card-img.jpg")}
              resizeMode="cover"
              className="w-16 h-16 rounded-full"
            />
          }
          name="Leny"
          message="Hey, what are you doing right now?"
        />
        <MessageCard
          img={
            <Image
              source={require("../assets/main-card-img.jpg")}
              resizeMode="cover"
              className="w-16 h-16 rounded-full"
            />
          }
          name="Leny"
          message="Hey, what are you doing right now?"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
