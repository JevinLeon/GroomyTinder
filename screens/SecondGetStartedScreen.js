import { View, Text, Image } from "react-native";
import React from "react";
import GetStartedLayout from "../components/GetStartedLayout";

const SecondGetStartedScreen = () => {
  return (
    <GetStartedLayout
      img={<Image source={require(`../assets/get-started/second.png`)} />}
      text={
        <Text className="text-5xl font-bold">
          Get the <Text className="text-primary">best services</Text> for your
          pets!
        </Text>
      }
      level="second"
      to="ThirdGetStarted"
    />
  );
};

export default SecondGetStartedScreen;
