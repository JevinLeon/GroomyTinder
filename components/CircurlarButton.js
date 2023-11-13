import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const CircurlarButton = ({ buttonSize, padding = "0", icon, to }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`w-${buttonSize} h-${buttonSize} p-${padding} bg-primary rounded-full justify-center items-center shadow-lg shadow-slate-700`}
      onPress={() =>
        to === "back" ? navigation.goBack() : navigation.navigate(to)
      }
    >
      {icon}
    </TouchableOpacity>
  );
};

export default CircurlarButton;
