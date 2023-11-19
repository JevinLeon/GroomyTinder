import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const StoreCard = ({ img, title, distance, rating, type, description }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="w-52 h-32 items-center rounded-xl mr-5"
      onPress={() =>
        navigation.navigate("Store", {
          img,
          title,
          distance,
          rating,
          type,
          description,
        })
      }
    >
      {img}
      <View className="w-full bg-white rounded-b-xl shadow shadow-slate-700 p-4 gap-1">
        <Text className="text-xs text-slate-500">{distance}</Text>
        <Text className="text-lg font-bold leading-6">{title}</Text>
        <View className="flex-row">
          <StarIcon size={20} color="#FFBC58" />
          <Text className="ml-2">{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;
