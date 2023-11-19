import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectStore } from "../features/storeSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularOutlineButton from "../components/CircularOutlineButton";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const store = useSelector(selectStore);

  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="z-50">
        <View className="mx-5 mt-2 mb-8">
          <CircularOutlineButton to="Home" />
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-[#757575]">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={require("../assets/delivery-confirmation.png")}
              resizeMode="cover"
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar size={30} color="#FF7D1B" indeterminate={true} />

          <Text className="mt-3 text-[#757575]">
            Your order at {store.title} is being processed
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: 1.119800538887173,
          longitude: 104.00304286684481,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 1.119800538887173,
            longitude: 104.00304286684481,
          }}
          title={store.title}
          description={store.description}
          identifier="origin"
          pinColor="#FF7D1B"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={require("../assets/delivery-driver.png")}
          resizeMode="cover"
          className="w-12 h-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Jevin Leon</Text>
          <Text className="text-gray-400">Your Driver</Text>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
