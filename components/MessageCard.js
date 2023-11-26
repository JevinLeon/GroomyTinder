import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MessageCard = ({ img, name, message }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white flex-row w-full p-2 space-x-3 items-center rounded-lg shadow-md shadow-slate-400 mb-3"
      onPress={() => navigation.navigate("Chat")}
    >
      {img}
      <View className="flex-col flex-1 justify-center">
        <Text className="font-bold text-xl">{name}</Text>
        <Text className="text-gray-400">{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;
