import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import CircurlarButton from "../components/CircurlarButton";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import CustomButton from "../components/CustomButton";

const MainGetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-[120%] relative flex-col py-8 gap-6 items-center">
      <View className="absolute top-16 left-6">
        <CircurlarButton
          buttonSize="16"
          icon={<ArrowLeftIcon size={24} color="white" />}
          to="back"
        />
      </View>
      <View>
        <Image source={require(`../assets/get-started/main.png`)} />
      </View>
      <View className="px-4">
        <Text className="text-5xl font-bold text-center">
          Welcome to <Text className="text-primary">Groomy</Text>
        </Text>
        <Text className="text-xl text-center mt-2">
          Best app for your pet needs!
        </Text>
      </View>
      <View className="w-full pt-8 px-16">
        <CustomButton title="Get Started" to="SignUp" />
      </View>
      <View className="flex-row justify-center">
        <Text className="text-md text-secondary">
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text className="text-primary text-md">Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainGetStartedScreen;
