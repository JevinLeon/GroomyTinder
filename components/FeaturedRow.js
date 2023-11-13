import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoreCard from "./StoreCard";

const FeaturedRow = ({ title }) => {
  return (
    <View className="px-8 py-4">
      <Text className="text-xl font-bold mb-4">{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="h-64"
      >
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
        <StoreCard
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
