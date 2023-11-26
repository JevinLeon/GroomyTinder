import { View, Text } from "react-native";
import React from "react";

const ChatBubble = ({ isUserChat = "false" }) => {
  return (
    <View className={`${isUserChat && "items-end"} mb-4`}>
      <View
        className={`rounded-2xl ${
          isUserChat ? "bg-primary rounded-br-none" : "bg-white rounded-bl-none"
        } p-3 max-w-[70%]`}
      >
        <Text className={`${isUserChat ? "text-white" : "text-black"}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>
      </View>
      <Text className="text-sm">10.43 AM</Text>
    </View>
  );
};

export default ChatBubble;
