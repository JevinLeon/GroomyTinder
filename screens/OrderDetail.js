import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import StoreCard from "../components/StoreCard";
import { Image } from "react-native";

const OrderDetail = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 px-8">
      <View className="flex-row items-center py-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Order Detail</Text>
      </View>

      <ScrollView>
        <View className="bg-white flex-row space-x-5 py-4 border-b border-lightGray">
          <Image
            source={require("../assets/delivery-driver.png")}
            resizeMode="cover"
            className="w-12 h-12 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-lg">Jevin Leon</Text>
            <Text className="text-gray-400">Your Driver</Text>
          </View>
        </View>

        <View className="py-4 space-y-4 border-b border-lightGray">
          <Text className="text-[#757575] font-bold text-lg">
            Delivery Details
          </Text>
          <View>
            <Text className="text-gray-400">Delivered</Text>
            <Text className="text-lg font-bold">Today, 11.37 AM</Text>
          </View>
          <View>
            <Text className="text-gray-400">Store location</Text>
            <Text className="text-lg font-bold">
              Cat Specialist - Dunia Kucing
            </Text>
          </View>
          <View>
            <Text className="text-gray-400">Target location</Text>
            <Text className="text-lg font-bold">Home</Text>
          </View>
        </View>

        <View className="py-4 space-y-4 border-b border-lightGray">
          <Text className="text-[#757575] font-bold text-lg">Order (s)</Text>
          <View className="flex-row justify-between">
            <Text>Cleaning Service</Text>
            <Text>1</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Grooming Service</Text>
            <Text>1</Text>
          </View>
        </View>
        <View className="py-4 space-y-4 border-b border-lightGray">
          <View className="space-y-4 pb-6 border-b border-dashed border-lightGray">
            <Text className="text-[#757575] font-bold text-lg">
              Payment Details
            </Text>
            <View className="flex-row justify-between">
              <Text>Price</Text>
              <Text>300.000</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Delivery Fee</Text>
              <Text>25.000</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Service Fee</Text>
              <Text>5.000</Text>
            </View>
            <View className="flex-row justify-between">
              <Text>Discounts</Text>
              <Text>-12.000</Text>
            </View>
          </View>
          <View className="flex-row justify-between">
            <Text>Total</Text>
            <Text>-318.000</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
