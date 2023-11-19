import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketPopup = () => {
  const items = useSelector((state) => selectBasketItems(state));
  const navigation = useNavigation();
  const basketTotal = useSelector((state) => selectBasketTotal(state));

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#FF7D1B] p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#D75B00] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket{" "}
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="IDR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketPopup;
