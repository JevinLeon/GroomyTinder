import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ title, to, classes }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`items-center py-2 px-6 bg-primary rounded-lg ${classes}`}
      onPress={() => navigation.navigate(to)}
    >
      <Text className="text-xl text-white rounded-full font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
