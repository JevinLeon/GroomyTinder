import { View, Text, Image } from "react-native";
import React from "react";

const ImageCard = () => {
  return (
    <View className="w-40 h-40 bg-gray-300 rounded-xl overflow-hidden mr-4">
      <Image
        source={require("../assets/prof-pic-2.jpg")}
        resizeMode="cover"
        className="w-full h-full"
      />
    </View>
  );
};

export default ImageCard;
