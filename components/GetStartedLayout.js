import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SliderRadio from "../components/SliderRadio";
import CircurlarButton from "../components/CircurlarButton";
import { ArrowLeftIcon, ChevronRightIcon } from "react-native-heroicons/solid";

const GetStartedLayout = ({ img, text, level, to, isFirst = false }) => {
  return (
    <SafeAreaView className="bg-white h-[120%] relative flex-col py-20 gap-12 items-center">
      {!isFirst && (
        <View className="absolute top-16 left-6">
          <CircurlarButton
            buttonSize="16"
            icon={<ArrowLeftIcon size={24} color="white" />}
            to="back"
          />
        </View>
      )}
      <View>{img}</View>
      <View className="px-4">{text}</View>
      <View className="flex-row justify-between items-center w-full px-16">
        <SliderRadio level={level} />
        <CircurlarButton
          buttonSize="16"
          padding="12"
          icon={<ChevronRightIcon size={48} color="white" />}
          to={to}
        />
      </View>
    </SafeAreaView>
  );
};

export default GetStartedLayout;
