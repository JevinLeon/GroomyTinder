import {
  View,
  Text,
  LogBox,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectStore } from "../features/storeSlice";
import CircularOutlineButton from "../components/CircularOutlineButton";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  const navigation = useNavigation();
  const store = useSelector(selectStore);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-primary bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-[#757575]">{store.title}</Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={require("../assets/delivery.png")}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-75 min</Text>
        </View>
        <View className="absolute top-3 left-5 ">
          <CircularOutlineButton />
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-primary">{items.length} x</Text>
              <Image
                source={require("../assets/service-store.jpg")}
                className="h-12 w-12 rounded-full"
                resizeMode="cover"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="IDR" />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-primary text-xs">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row  justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="IDR" />
            </Text>
          </View>
          <View className="flex-row  justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={12000} currency="IDR" />
            </Text>
          </View>
          <View className="flex-row  justify-between">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 12000} currency="IDR" />
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-primary p-4"
            onPress={() => navigation.navigate("PreparingOrder")}
          >
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
