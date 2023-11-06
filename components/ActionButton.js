import { View, TouchableOpacity } from "react-native";
import React from "react";
import { HeartIcon, PlusIcon } from "react-native-heroicons/solid";

const ActionButton = () => {
  return (
    <View className="flex-row w-full justify-around py-4">
      <TouchableOpacity className="w-16 h-16 bg-white border-2 border-primary rounded-full justify-center items-center rotate-45">
        <PlusIcon size={32} color="#FF7D1B" />
      </TouchableOpacity>
      <TouchableOpacity className="w-16 h-16 bg-primary border-2 border-primary rounded-full justify-center items-center">
        <HeartIcon size={32} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;
