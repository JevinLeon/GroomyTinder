import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, PaperAirplaneIcon } from "react-native-heroicons/solid";
import ChatBubble from "../components/ChatBubble";
import { useNavigation } from "@react-navigation/native";

const ChatScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1 px-8 space-y-4">
      <View className="flex-row items-center space-x-4 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={24} color="#212121" />
        </TouchableOpacity>
        <View className="flex-row space-x-2">
          <Image
            source={require("../assets/main-card-img.jpg")}
            resizeMode="cover"
            className="w-12 h-12 rounded-full"
          />
          <View>
            <Text className="font-bold text-lg">Leny</Text>
            <Text className="text-[#757575]">Online</Text>
          </View>
        </View>
      </View>
      <ScrollView className="bg-primary/5 flex-1 rounded-2xl p-4">
        <ChatBubble isUserChat={true} />
        <ChatBubble isUserChat={false} />
        <ChatBubble isUserChat={false} />
        <ChatBubble isUserChat={true} />
        <ChatBubble isUserChat={false} />
        <ChatBubble isUserChat={false} />
        <ChatBubble isUserChat={false} />
        <ChatBubble isUserChat={true} />
      </ScrollView>
      <View className="flex-row space-x-4 bg-white py-8">
        <TextInput
          placeholder="Send Message"
          className="flex-1 bg-primary/5 py-4 px-4 rounded-full font-bold"
        />
        <TouchableOpacity className="bg-primary rounded-full p-4">
          <PaperAirplaneIcon size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
