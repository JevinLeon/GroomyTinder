import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  LogBox,
} from "react-native";
import React, { useEffect } from "react";
import {
  ArrowLeftIcon,
  MapIcon,
  MapPinIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import CircularOutlineButton from "../components/CircularOutlineButton";
import ItemCard from "../components/ItemCard";
import BasketPopup from "../components/BasketPopup";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setStore } from "../features/storeSlice";

const StoreScreen = () => {
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  const dispatch = useDispatch();

  const {
    params: { img, title, distance, rating, type, description },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setStore({
        title,
        distance,
        rating,
        type,
        description,
      })
    );
  }, []);

  return (
    <>
      <BasketPopup />

      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        <View className="relative">
          <Image
            source={require("../assets/service-store.jpg")}
            resizeMode="cover"
            className="w-full h-56 bg-gray-300 p-4"
          />
          <View className="absolute top-14 left-5 ">
            <CircularOutlineButton />
          </View>
        </View>
        <View className="mx-7 my-4">
          <View className="mb-4 sticky">
            <Text className="font-bold text-2xl mb-2">{title}</Text>
            <View className="flex-row gap-8 mb-2">
              <View className="flex-row">
                <StarIcon size={20} color="#FFBC58" />
                <Text className="font-bold text-[#757575] ml-1">{rating}</Text>
              </View>
              <View className="flex-row">
                <MapPinIcon size={20} color="#757575" />
                <Text className="text-[#757575] ml-1">{distance}</Text>
              </View>
              <View className="flex-row">
                <ShoppingBagIcon size={20} color="#757575" />
                <Text className="text-[#757575] ml-1">{type}</Text>
              </View>
            </View>
            <Text className="text-[#757575]">{description}</Text>
          </View>
          <View className="pb-36">
            <ItemCard
              id="1"
              name="Pet Cleaning Package"
              description="Swoosh away your pet's dirt!"
              price={150000}
            />
            <ItemCard
              id="2"
              name="Pet Food"
              description="Swoosh away your pet's hunger!"
              price={80000}
            />
            <ItemCard
              id="3"
              name="Pet Beverage"
              description="Swoosh away your pet's thirst!"
              price={50000}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default StoreScreen;
