import { View, Text, Image } from "react-native";
import React from "react";

const PromoCard = () => {
  return (
    <View className="w-full shadow-lg shadow-slate-700 items-center rounded-xl">
      <Image
        source={require("../assets/home/world-animal-day-promo.png")}
        resizeMode="cover"
        className="w-full"
      />
      <View className="w-full bg-white p-4 rounded-b-xl">
        <Text className="text-lg font-bold">World Animal Day - 50% OFF!</Text>
        <Text className="text-sm text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu
          lobortis elementum nibh tellus molestie nunc non blandit.
        </Text>
      </View>
    </View>
  );
};

export default PromoCard;
