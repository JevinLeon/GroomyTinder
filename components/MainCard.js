import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MapPinIcon, HeartIcon, PlusIcon } from "react-native-heroicons/solid";

const MainCard = () => {
  return (
    <View className="bg-gray-300 w-full h-[92%] rounded-xl shadow-2xl overflow-hidden">
      {/* Image */}
      <View className="relative">
        <View className="absolute top-0 left-0 w-full h-full bg-gray-500/10 z-10" />
        <Image
          source={require("../assets/main-card-img.jpg")}
          resizeMode="cover"
          className="h-full w-full"
        />
      </View>
      {/* Details */}
      <View className="absolute bottom-0 w-full h-1/3 z-20">
        <View className="h-full">
          <Image
            source={require("../assets/card-background-blur.png")}
            resizeMode="cover"
            className="absolute w-full h-full "
          />
          <View className="px-8 py-4 items-center">
            <View className="flex-row items-center gap-4">
              <Text className="text-white font-bold text-3xl">Leny</Text>
              <Text className="text-[#FF9C52] font-bold text-lg">
                F | 3 months | Siberian Husky
              </Text>
            </View>
            <View className="flex-row items-center">
              <MapPinIcon size={20} color="#fff" />
              <Text className="text-white ml-2 text-lg">Batam, Indonesia</Text>
            </View>
            <View className="flex-row w-full justify-around py-4">
              <TouchableOpacity className="w-16 h-16 bg-white border-2 border-primary rounded-full justify-center items-center rotate-45">
                <PlusIcon size={32} color="#FF7D1B" />
              </TouchableOpacity>
              <TouchableOpacity className="w-16 h-16 bg-primary border-2 border-primary rounded-full justify-center items-center">
                <HeartIcon size={32} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainCard;
