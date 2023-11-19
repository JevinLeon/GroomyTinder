import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const NotificationCard = ({ title, description = null }) => {
  return (
    <TouchableOpacity className="bg-white w-full flex-row items-center space-x-4 my-2">
      <Image
        source={require("../assets/notification-image.png")}
        resizeMode="cover"
        className="w-16 h-16"
      />
      <View className="space-y-1">
        <Text className="font-bold text-lg">{title}</Text>
        {description && <Text className="text-gray-400">{description}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
