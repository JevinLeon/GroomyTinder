import { View, Text, Button, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PencilIcon } from "react-native-heroicons/solid";
import ImageCard from "../components/ImageCard";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-8 py-2 gap-6">
        <View className="flex-row justify-between">
          <Text className="text-secondary font-bold text-2xl">My Profile</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditUserProfile")}
          >
            <PencilIcon size={24} color="#FF7D1B" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center">
          <View className="w-1/2">
            <Image
              source={require("../assets/prof-pic-2.jpg")}
              className="w-28 h-28 rounded-full"
            />
          </View>
          <View className="w-1/2 flex-row justify-between">
            <View>
              <Text>Name</Text>
              <Text>Gender</Text>
              <Text>Age</Text>
              <Text>Type</Text>
            </View>
            <View>
              <Text>: Ray</Text>
              <Text>: Female</Text>
              <Text>: 3 months</Text>
              <Text>: Siberian Husky</Text>
            </View>
          </View>
        </View>

        <View className="space-y-4 pb-4">
          <Text className="text-secondary font-bold text-xl">
            Batam, Indonesia
          </Text>
          <Text className="text-secondary text-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium officiis dolores veniam dolorum reiciendis illo,
            veritatis blanditiis aliquid illum quibusdam rerum consequuntur
            deserunt libero asperiores, eum a fugiat quae animi. Itaque, enim!
          </Text>
          <View className="w-full h-1 bg-primary" />
        </View>

        <View className="pb-4">
          <Text className="text-secondary font-bold text-xl mb-4">
            My Photos
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5].map((item) => (
              <ImageCard key={item} />
            ))}
          </ScrollView>
        </View>

        <View>
          <CustomButton title="Logout" to="SignIn" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
