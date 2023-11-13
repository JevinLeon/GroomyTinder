import { View, Text, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SliderRadio from "../components/SliderRadio";
import CircurlarButton from "../components/CircurlarButton";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import GetStartedLayout from "../components/GetStartedLayout";

const FirstGetStartedScreen = () => {
  return (
    <GetStartedLayout
      img={<Image source={require(`../assets/get-started/first.png`)} />}
      text={
        <Text className="text-5xl font-bold">
          Find the <Text className="text-primary">best partner</Text> for your
          pets!
        </Text>
      }
      level="first"
      to="SecondGetStarted"
      isFirst={true}
    />
  );
};

export default FirstGetStartedScreen;
