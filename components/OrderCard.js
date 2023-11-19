import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CheckCircleIcon, ClockIcon } from "react-native-heroicons/solid";

const OrderCard = ({ isCompleted = false, text, items }) => {
  return (
    <View className="w-full bg-white border-b border-lightGray pb-4 mb-4">
      <Text className="text-md mb-4">Today, 12:13</Text>
      <View className="flex-row items-center h-32 gap-2 py-2">
        <View className="h-full flex-col flex-1 justify-between">
          <Text className="text-lg font-bold leading-6">{text}</Text>
          <View className="flex-row items-center gap-1">
            {!isCompleted ? (
              <ClockIcon size={16} color="#FFB31F" />
            ) : (
              <CheckCircleIcon size={16} color="#039A00" />
            )}
            <Text className="text-sm">
              {!isCompleted ? "On going" : "Completed"}
            </Text>
          </View>
          <Text className="text-xs text-slate-500">{items}</Text>
        </View>
        <View className="flex-1 flex-col items-end justify-between h-full">
          <Text>Rp. 150.000</Text>
          {!isCompleted && (
            <TouchableOpacity className="bg-[#039A00] py-2 px-6 rounded-lg">
              <Text className="text-white">Mark as done</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
