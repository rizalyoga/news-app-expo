import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HeaderSub from "../components/HeaderSub";
import moment from "moment";

const DetailNewsScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const description =
    "This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.";

  const linkImageNotFound =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  return (
    <>
      <HeaderSub navigation={navigation} />
      <View className="flex-1 mx-2">
        <Text className="font-bold text-lg mt-2 ">{item.title}</Text>
        <View className="flex mt-1 flex-row justify-between my-2 ">
          <Text className="text-slate-700 basis-[70%]">
            {item.author ? item.author : "Rizalyoga, Gloria"}
          </Text>
          <Text className="text-slate-700 -mt-0 basis-[30%] text-right">
            {moment(item.publishedAt).format("MM/DD/YYYY")}
          </Text>
        </View>
        <Image
          source={{
            uri: item.urlToImage ? item.urlToImage : linkImageNotFound,
          }}
          className="my-4 h-56 w-full rounded-md"
        />
        <Text className="text-base">
          {item.content ? item.content : description}
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WebviewNews", { url: item.url });
          }}
          className="max-w-[140px] bg-red-500 px-6 py-2 rounded-md my-4"
        >
          <Text className="text-white text-lg text-center">Read More</Text>
        </TouchableOpacity>

        <Text>Source : {item.url}</Text>
      </View>
    </>
  );
};

export default DetailNewsScreen;
