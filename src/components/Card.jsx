import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
import moment from "moment";

const Card = ({ item }) => {
  const navigation = useNavigation();
  const title = "This endpoint suits article discovery and analysis.";
  const description =
    "This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.";

  const linkImageNotFound =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  return (
    <TouchableOpacity
      className="my-6 relative "
      onPress={() => {
        navigation.navigate("DetailNews", { item: item });
      }}
    >
      <Image
        source={{
          uri: item.urlToImage ? item.urlToImage : linkImageNotFound,
        }}
        className="h-52 w-full rounded-md bg-white"
        resizeMethod="resize"
      />
      <Text className="font-bold text-lg mt-2 leading-5">
        {item.title ? item.title : title}
      </Text>
      <Text className="text-slate-600 mt-1 ">
        {item.description ? item.description : description}
      </Text>
      <View className="flex mt-1 flex-row justify-between ">
        <Text className="text-slate-700 text-base basis-[70%]">
          {item.author ? item.author : "Rizalyoga, Gloria"}
        </Text>
        <Text className="text-slate-700 -mt-0 basis-[30%] text-base text-right">
          {moment(item.publishedAt).format("MM/DD/YYYY")}
        </Text>
      </View>

      <View className="absolute right-0 bg-red-500 p-2 rounded-tr-md">
        <Text className="text-white">{item.source.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
