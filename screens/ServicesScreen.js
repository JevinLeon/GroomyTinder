import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  Animated,
} from "react-native";
import React from "react";
import CircularOutlineButton from "../components/CircularOutlineButton";
import { MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/solid";
import FeaturedRow from "../components/FeaturedRow";

const ServicesScreen = () => {
  return (
    <View className="bg-white h-full">
      <View className="relative">
        <Image
          source={require("../assets/services-top-bar.png")}
          resizeMode="cover"
          className="w-full rounded-b-3xl absolute top-0 left-0"
        />
        <View className="py-16 px-8 mb-12 w-full">
          <View className="flex-row items-center">
            <CircularOutlineButton />
            <View className="flex-1 h-12 bg-white/80 border border-[#212121] rounded-full flex-row items-center px-2 ml-4">
              <MapPinIcon size={24} color="#212121" />
              <Text className="ml-2">Jl. Sudirman, Komplek Rayakota</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="px-8">
        <View className="w-full h-16 bg-white border border-lightGray rounded-2xl flex-row items-center px-4">
          <MagnifyingGlassIcon size={24} color="#757575" />
          <TextInput
            className="flex-1 pl-2 text-xl text-[#757575]"
            placeholder="Search..."
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FeaturedRow title="Top Rated Grooming Places" />
        <FeaturedRow title="Best Grooming Places Near You" />
        <FeaturedRow title="Voted Cheapest Grooming Places" />
      </ScrollView>
    </View>
  );
};

export default ServicesScreen;
