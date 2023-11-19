import { View, Text, ScrollView, Image } from "react-native";
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
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
        <StoreCard
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
        <StoreCard
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
        <StoreCard
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
        <StoreCard
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
        <StoreCard
          img={
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-full h-full overflow-hidden rounded-t-xl"
            />
          }
          title="Cat Specialist - Dunia Kucing"
          distance="0.5 km"
          rating="4.6"
          type="Services"
          description="Welcome to Cat Specialist - Dunia Kucing. Here, we provide the
              best services for all pets. We welcome cleaning, grooming, haircut
              for your dearest pet."
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
