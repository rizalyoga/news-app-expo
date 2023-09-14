import React from "react";
import { View, Text, Image } from "react-native-animatable";
import Header from "../components/Header";
import moment from "moment";

const DetailNewsScreen = ({ route }) => {
  const { item } = route.params;

  const description =
    "This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.";

  const linkImageNotFound =
    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";

  return (
    <>
      <Header />
      <View className="flex-1 mx-2">
        <Text className="font-bold text-lg mt-2 ">{item.title}</Text>
        <Image
          source={{
            uri: item.urlToImage ? item.urlToImage : linkImageNotFound,
          }}
          className="my-4 h-56 w-full rounded-md"
        />
        <Text className="text-base">
          {item.content ? item.content : description}
        </Text>
        <View className="my-4">
          <Text>{item.author ? item.author : "Rizalyoga"}</Text>
          <Text>
            Last update : {moment(item.publishedAt).format("MM/DD/YYYY")}
          </Text>
        </View>
        <Text>Source : {item.url}</Text>
      </View>
    </>
  );
};

export default DetailNewsScreen;
