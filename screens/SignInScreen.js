import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full relative">
      <View className="absolute top-0 left-0">
        <Image source={require("../assets/sign-up/gradient-mid-left.png")} />
      </View>
      <View className="absolute bottom-0 right-0">
        <Image source={require("../assets/sign-up/gradient-below-right.png")} />
      </View>
      <Logo />
      <View className="px-8 gap-6">
        <Text className="text-center font-bold text-3xl">Sign In</Text>
        <TextInput
          editable
          placeholder="Email Address"
          keyboardType="email-address"
          className="border border-lightGray h-12 px-4 rounded-md"
        />
        <TextInput
          editable
          placeholder="Password"
          keyboardType="visible-password"
          className="border border-lightGray h-12 px-4 rounded-md"
        />
        <View className="bg-primaryc">
          <CustomButton title={"Sign in"} to={"HomeScreen"} classes={"mt-4"} />
        </View>
        <View className="flex-row justify-center">
          <Text className="text-md text-secondary">
            Don't have an account yet?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text className="text-primary text-md">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      /> */}
    </SafeAreaView>
  );
};

export default SignInScreen;
