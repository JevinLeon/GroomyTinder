import { View, Text } from "react-native";
import React from "react";

const SliderRadio = ({ level }) => {
  return (
    <View className="flex flex-row gap-1">
      <View
        className={`${
          level === "first" ? "w-[30px] bg-primary" : "w-2.5 bg-lighterGray"
        } h-2.5 rounded-full`}
      />
      <View
        className={`${
          level === "second" ? "w-[30px] bg-primary" : "w-2.5 bg-lighterGray"
        } h-2.5 rounded-full`}
      />
      <View
        className={`${
          level === "third" ? "w-[30px] bg-primary" : "w-2.5 bg-lighterGray"
        } h-2.5 rounded-full`}
      />
    </View>
  );
};

export default SliderRadio;
