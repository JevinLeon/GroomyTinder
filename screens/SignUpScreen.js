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

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full relative">
      <Logo />
      <View className="px-8 gap-6">
        <Text className="text-center font-bold text-3xl">Sign Up</Text>
        <TextInput
          editable
          placeholder="Full Name"
          className="border border-lightGray h-12 px-4 rounded-md"
        />
        <TextInput
          editable
          placeholder="Phone No."
          keyboardType="phone-pad"
          className="border border-lightGray h-12 px-4 rounded-md"
        />
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
        <View>
          <CustomButton title={"Sign up"} to={"SignIn"} classes={"mt-4"} />
        </View>
        <View className="flex-row justify-center">
          <Text className="text-md text-secondary">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text className="text-primary text-md">Sign in</Text>
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

export default SignUpScreen;
