import React from "react";
import { View, Text } from "react-native-animatable";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-slate-200">
      <Header />
      <Text className="mx-4 font-semibold text-2xl">Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
