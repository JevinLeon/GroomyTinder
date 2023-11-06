import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const CustomButton = ({ title, to, classes }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className={`items-center ${classes}`}
      onPress={() => navigation.navigate(to)}
    >
      <LinearGradient
        colors={["#FFBB87", "#FF852B"]}
        start={{ x: 0.5, y: 0.1 }}
        className="rounded-full py-3 px-9 shadow-lg shadow-primary"
      >
        <Text className="text-xl text-white rounded-full">{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
