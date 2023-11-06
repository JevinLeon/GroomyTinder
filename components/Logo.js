import { View, Image } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View className="w-full items-center">
      <Image
        source={require("../assets/groomy.png")}
        resizeMode="contain"
        className="h-52 w-52"
      />
    </View>
  );
};

export default Logo;
