import { View, Text } from "react-native";
import React from "react";
import PromoCard from "./PromoCard";

const FeaturedPromo = ({ title }) => {
  return (
    <View className="px-8 py-4">
      <Text className="text-xl font-bold mb-4">{title}</Text>
      <PromoCard />
    </View>
  );
};

export default FeaturedPromo;
