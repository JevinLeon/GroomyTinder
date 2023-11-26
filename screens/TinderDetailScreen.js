import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeartIcon, PlusIcon } from "react-native-heroicons/solid";

const TinderDetailScreen = () => {
  const {
    params: { img, name, gender, age, type, location, bio, photos },
  } = useRoute();

  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 px-8 py-4">
      <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4">
        <ArrowLeftIcon size={24} color="#212121" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="space-y-4">
        <Image
          source={{ uri: img }}
          resizeMode="cover"
          className="w-full h-52 rounded-xl"
        />
        <View className="flex-row w-full justify-around py-10">
          <TouchableOpacity className="w-16 h-16 bg-white border-2 border-primary rounded-full justify-center items-center rotate-45">
            <PlusIcon size={32} color="#FF7D1B" />
          </TouchableOpacity>
          <TouchableOpacity className="w-16 h-16 bg-primary border-2 border-primary rounded-full justify-center items-center">
            <HeartIcon size={32} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View className="space-y-2">
          <Text className="font-bold text-lg">Detail</Text>
          <View className="flex-row space-x-4">
            <View className="space-y-2">
              <Text>Name</Text>
              <Text>Gender</Text>
              <Text>Age</Text>
              <Text>Type</Text>
              <Text>Location</Text>
            </View>
            <View className="space-y-2">
              <Text>: {name}</Text>
              <Text>: {gender[0].toUpperCase() + gender.substring(1)}</Text>
              <Text>: {age}</Text>
              <Text>: {type}</Text>
              <Text>: {location}</Text>
            </View>
          </View>
        </View>
        <View className=" space-y-2">
          <Text className="font-bold text-lg">Bio</Text>
          <Text>{bio}</Text>
        </View>
        <View className="space-y-2">
          <Text className="font-bold text-lg">Photos</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
          >
            {photos?.map((photo) => (
              <Image
                key={photo.id}
                source={{ uri: photo.uri }}
                resizeMode="cover"
                className="w-24 h-24 rounded-xl"
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TinderDetailScreen;
