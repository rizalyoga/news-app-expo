import React from "react";
import { View, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator color={"#EF4444"} size={36} />
    </View>
  );
};

export default Loading;
