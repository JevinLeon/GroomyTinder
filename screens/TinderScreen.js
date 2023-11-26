import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Animated,
  Modal,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ChatBubbleOvalLeftEllipsisIcon } from "react-native-heroicons/outline";
import MainCard from "../components/MainCard";
import Swiper from "react-native-deck-swiper";
import {
  AdjustmentsHorizontalIcon,
  HeartIcon,
  MapPinIcon,
  PlusIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Ray",
    age: "3 months",
    gender: "female",
    type: "Siberian Husky",
    location: "Batam, Indonesia",
    img: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/791701_4-5-2021_10-49-26.webp",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Uullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    photos: [
      {
        id: 1,
        uri: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/791701_4-5-2021_10-49-26.webp",
      },
      {
        id: 2,
        uri: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/791701_4-5-2021_10-49-26.webp",
      },
      {
        id: 3,
        uri: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/791701_4-5-2021_10-49-26.webp",
      },
    ],
  },
  {
    id: 2,
    name: "John",
    age: "4 months",
    gender: "male",
    type: "Golden",
    location: "Singapore",
    img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/14045947/Amankah-Memberikan-Nasi-pada-Anjing-Golden.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Uullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    photos: [
      {
        id: 1,
        uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/14045947/Amankah-Memberikan-Nasi-pada-Anjing-Golden.jpg",
      },
      {
        id: 2,
        uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/14045947/Amankah-Memberikan-Nasi-pada-Anjing-Golden.jpg",
      },
      {
        id: 3,
        uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/14045947/Amankah-Memberikan-Nasi-pada-Anjing-Golden.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Oolong",
    age: "2.5 months",
    gender: "male",
    type: "Chi Hua Hua",
    location: "Batam, Indonesia",
    img: "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/anjing-chihuahua-1-1024x550.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Uullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    photos: [
      {
        id: 1,
        uri: "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/anjing-chihuahua-1-1024x550.jpg",
      },
      {
        id: 2,
        uri: "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/anjing-chihuahua-1-1024x550.jpg",
      },
      {
        id: 3,
        uri: "https://www.ruparupa.com/blog/wp-content/uploads/2021/10/anjing-chihuahua-1-1024x550.jpg",
      },
    ],
  },
];

const TinderScreen = () => {
  const navigation = useNavigation();
  const swipeRef = useRef(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderModal = () => {
    return (
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <TouchableOpacity
          onPress={() => setIsModalVisible(false)}
          activeOpacity={1}
          className="flex-1 justify-center items-center bg-black/50"
        >
          <View className="bg-white p-4 rounded-xl w-full h-1/2 absolute bottom-0 z-50 space-y-4">
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              className="items-end"
            >
              <XMarkIcon size={32} color="#757575" />
            </TouchableOpacity>
            <View className="items-center">
              <Text className="font-bold text-2xl">Pets Tinder Filter</Text>
            </View>
            <View className="flex-row justify-between mx-4">
              <TouchableOpacity className="border-2 border-[#757575] rounded-xl items-center">
                <Text className="font-bold text-lg">CATS</Text>
                <Image
                  source={{
                    uri: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753",
                  }}
                  resizeMode="cover"
                  className="w-40 h-40"
                />
              </TouchableOpacity>
              <TouchableOpacity className="border-2 border-primary rounded-xl items-center">
                <Text className="font-bold text-lg">DOGS</Text>
                <Image
                  source={{
                    uri: "https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg",
                  }}
                  resizeMode="cover"
                  className="w-40 h-40"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row justify-between mx-8 items-center">
        <TouchableOpacity
          className="flex-row py-2 items-center gap-2"
          onPress={() => navigation.navigate("UserProfile")}
        >
          <Image
            source={require("../assets/prof-pic-2.jpg")}
            className="w-8 h-8 rounded-full"
            resizeMode="cover"
          />
          <Text className="text-lg text-secondary">
            Hi, <Text className="font-bold">Ray</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
          <ChatBubbleOvalLeftEllipsisIcon size={32} color="#212121" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        className="mx-8 my-2 items-end z-50"
      >
        <AdjustmentsHorizontalIcon size={32} color="#212121" />
      </TouchableOpacity>
      <View className="flex-1 -mt-10">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() => console.log("Swipe Pass")}
          onSwipedRight={() => console.log("Swipe MATCH")}
          backgroundColor="#4FD0E9"
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30",
                },
              },
            },
          }}
          renderCard={(card) =>
            card ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate("TinderDetail", {
                    img: card.img,
                    name: card.name,
                    gender: card.gender,
                    age: card.age,
                    type: card.type,
                    location: card.location,
                    bio: card.bio,
                    photos: card.photos,
                  })
                }
                key={card.id}
                className="relative bg-white h-3/4 rounded-xl border border-[#757575]"
              >
                <Image
                  className="absolute w-full h-full rounded-xl"
                  resizeMode="cover"
                  source={{ uri: card.img }}
                />
                <View className="absolute bottom-0 bg-white w-full flex-row p-4">
                  <View className="flex-1 space-y-2">
                    <Text className="font-bold text-xl">{card.name}</Text>
                    <Text className="text-primary font-bold text-lg">
                      {card.gender[0].toUpperCase() + card.gender.substring(1)}{" "}
                      | {card.type}
                    </Text>
                    <View className="flex-row space-x-1">
                      <MapPinIcon size={24} color="#757575" />
                      <Text className="text-[#757575]">{card.location}</Text>
                    </View>
                  </View>
                  <Text className="font-bold text-xl">{card.age}</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View className="relative bg-white h-3/4 rounded-xl justify-center items-center border border-[#757575] space-y-4">
                <Text>No more profiles</Text>
                <Image
                  source={{
                    uri: "https://static-00.iconduck.com/assets.00/sad-but-relieved-face-emoji-emoji-2048x2048-3nl02kdk.png",
                  }}
                  resizeMode="cover"
                  className="h-56 w-56"
                />
              </View>
            )
          }
        />
      </View>
      <View className="flex-row w-full justify-around py-6">
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          className="w-16 h-16 bg-white border-2 border-primary rounded-full justify-center items-center rotate-45"
        >
          <PlusIcon size={32} color="#FF7D1B" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          className="w-16 h-16 bg-primary border-2 border-primary rounded-full justify-center items-center"
        >
          <HeartIcon size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      {renderModal()}
    </SafeAreaView>
  );
};

export default TinderScreen;
