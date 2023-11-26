import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon, CheckIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditUserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between mx-4 items-center">
        <View className="flex-row items-center space-x-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <XMarkIcon size={32} color="#757575" />
          </TouchableOpacity>
          <Text className="font-bold text-lg">Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CheckIcon size={32} color="#FF7D1B" />
        </TouchableOpacity>
      </View>
      <View className="w-full items-center py-4 space-y-2">
        <Image
          source={require("../assets/main-card-img.jpg")}
          resizeMode="cover"
          className="w-36 h-36 rounded-full"
        />
        <TouchableOpacity>
          <Text className="text-[#757575]">Edit Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View className="mx-8 space-y-4">
        <View>
          <Text>Name</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View>
          <Text>Gender</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View>
          <Text>Age</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View>
          <Text>Type</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View>
          <Text>Location</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View>
          <Text>Bio</Text>
          <TextInput editabl className="border-b border-primary" />
        </View>
        <View className="space-y-2">
          <Text>My Photos</Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            className="space-x-4"
          >
            <Image
              source={require("../assets/main-card-img.jpg")}
              resizeMode="cover"
              className="w-36 h-36 rounded-xl"
            />
            <Image
              source={require("../assets/pets.png")}
              resizeMode="cover"
              className="w-36 h-36 rounded-xl"
            />
            <Image
              source={require("../assets/groomy.png")}
              resizeMode="cover"
              className="w-36 h-36 rounded-xl"
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditUserProfileScreen;
