import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../components/CustomButton";
import Logo from "../components/Logo";
// import { BlurView } from "expo-blur";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full relative">
      <View className="absolute top-0 right-0">
        <Image
          source={require("../assets/get-started/gradient-top-right.png")}
        />
      </View>
      <View className="absolute bottom-0 left-0">
        <Image
          source={require("../assets/get-started/gradient-bot-left.png")}
        />
      </View>
      <Logo />
      <Text className="text-5xl font-bold text-center">
        Find the <Text className="text-primary">best partner</Text> for your
        pets!
      </Text>
      <View className="-mt-24 pb-4">
        <Image
          source={require("../assets/pets.png")}
          resizeMode="cover"
          className="h-[450px] w-full"
        />
      </View>
      {/* <TouchableOpacity className="items-center">
        <Text className="bg-primary bg-gradient-to-r from-gradientOne to-gradientTwo py-3 px-9 text-xl text-white rounded-full">
          Get Started
        </Text>
      </TouchableOpacity> */}
      <CustomButton title={"Get Started"} to={"SignIn"} />
    </SafeAreaView>
  );
};

export default GetStartedScreen;
