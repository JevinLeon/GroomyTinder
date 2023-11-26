import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const navigateTimeout = setTimeout(() => {
      navigation.navigate("FirstGetStarted");
    }, 3000);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Image
        source={require("../assets/groomy.png")}
        resizeMode="contain"
        className="w-96 h-96"
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
