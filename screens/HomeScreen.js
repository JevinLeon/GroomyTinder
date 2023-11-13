import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import FeaturedPromo from "../components/FeaturedPromo";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const links = [
    {
      img: <Image source={require("../assets/home/services-icon.png")} />,
      title: "Services",
    },
    {
      img: <Image source={require("../assets/home/products-icon.png")} />,
      title: "Products",
    },
    {
      img: <Image source={require("../assets/home/ongoing-icon.png")} />,
      title: "Ongoing",
    },
    {
      img: <Image source={require("../assets/home/history-icon.png")} />,
      title: "History",
    },
  ];

  return (
    <View className="bg-white h-full">
      <View className="w-full h-32 bg-white shadow-lg shadow-slate-700 rounded-b-3xl p-8 justify-end z-10">
        <View className="w-full h-8 bg-[#F7F7F7] border border-lightGray rounded-full flex-row items-center px-2">
          <MagnifyingGlassIcon size={16} color="#757575" />
          <TextInput
            className="flex-1 pl-2 text-[#757575]"
            placeholder="Find Services and Products for your pet"
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        className="-mt-4"
      >
        <View className="relative">
          <Image
            source={require("../assets/home/ads.png")}
            resizeMode="cover"
            className="w-full"
          />
          <View className="absolute bottom-8 left-4 py-2 px-4 bg-slate-800/25 rounded-md">
            <Text className="text-white">Ads</Text>
          </View>
        </View>
        <View className="flex-row gap-8 pt-8 pb-4 px-8 justify-center">
          {links.map((item) => (
            <TouchableOpacity className="items-center" key={item.title}>
              {item.img}
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <FeaturedPromo title="World Animal Day - 50% OFF!" />
        <FeaturedRow title="Our top services vendors" />
        <FeaturedRow title="Our top products vendors" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
