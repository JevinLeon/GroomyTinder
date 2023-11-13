import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ChatBubbleOvalLeftEllipsisIcon } from "react-native-heroicons/outline";
import MainCard from "../components/MainCard";

const TinderScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white">
      <View className="absolute bottom-0 right-0">
        <Image source={require("../assets/home/gradient-bottom-right.png")} />
      </View>
      <View className="flex-row justify-between px-8 py-2 items-center">
        <TouchableOpacity
          className="flex-row py-2 items-center gap-2"
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            source={require("../assets/prof-pic-2.jpg")}
            className="w-8 h-8 rounded-full"
            resizeMode="cover"
          />
          <Text className="text-lg text-secondary">
            Hi, <Text className="font-bold">Ray</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <ChatBubbleOvalLeftEllipsisIcon size={32} color="#212121" />
        </TouchableOpacity>
      </View>
      <View className="p-8">
        <MainCard />
      </View>
      {/* <Button
        title="Logout"
        onPress={() => navigation.navigate("GetStarted")}
      /> */}
    </SafeAreaView>
  );
};

export default TinderScreen;
