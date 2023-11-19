import { View, Text, TouchableOpacity, Image } from "react-native";
import Currency from "react-currency-formatter";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const ItemCard = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border-b border-lightGray ${
          isPressed ? "pb-0" : "pb-4"
        } my-4`}
        onPress={() => setIsPressed((prev) => !prev)}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-[#757575]">{description}</Text>
            <Text className="text-[#757575] mt-2">
              <Currency quantity={price} currency="IDR" />
            </Text>
          </View>
          <View>
            <Image
              source={require("../assets/service-store.jpg")}
              resizeMode="cover"
              className="w-20 h-20 bg-gray-300 p-4 rounded-lg"
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
            />
          </View>
        </View>
        {isPressed && (
          <View className="bg-white py-4">
            <View className="flex-row items-center space-x-2">
              <TouchableOpacity
                onPress={removeItemFromBasket}
                disabled={!items.length}
              >
                <MinusCircleIcon
                  size={40}
                  color={items.length > 0 ? "#FF7D1B" : "gray"}
                />
              </TouchableOpacity>
              <Text>{items.length}</Text>
              <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon size={40} color="#FF7D1B" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default ItemCard;
