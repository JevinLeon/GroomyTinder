import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon, XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const CircularOutlineButton = ({ to = "back" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`w-12 h-12 bg-white rounded-full justify-center items-center border border-[#212121]`}
      onPress={() =>
        to === "back" ? navigation.goBack() : navigation.navigate(to)
      }
    >
      <XMarkIcon size={24} color="#212121" fontWeight="bold" />
    </TouchableOpacity>
  );
};

export default CircularOutlineButton;
