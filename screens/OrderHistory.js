import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import OrderCard from "../components/OrderCard";

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full px-8">
      <View className="flex-row items-center py-2">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#212121" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">History</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="py-4">
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
        <OrderCard
          text="Cat Specialist - Dunia Kucing"
          items="1 Cleaning Service, 1 Grooming Service"
          isCompleted={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;
