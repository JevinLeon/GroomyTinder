import { View, Text, Image, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SliderRadio from "../components/SliderRadio";
import CircurlarButton from "../components/CircurlarButton";
import { ChevronRightIcon } from "react-native-heroicons/solid";
import GetStartedLayout from "../components/GetStartedLayout";

const ThirdGetStartedScreen = () => {
  return (
    <GetStartedLayout
      img={<Image source={require(`../assets/get-started/third.png`)} />}
      text={
        <Text className="text-4xl font-bold">
          Stay at home and get your{" "}
          <Text className="text-primary">pet needs</Text> with one click away!
        </Text>
      }
      level="third"
      to="MainGetStarted"
      isFirst={false}
    />
  );
};

export default ThirdGetStartedScreen;
