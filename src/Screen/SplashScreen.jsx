import React, { useEffect } from "react";
import { View, Text } from "react-native-animatable";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
  }, []);

  return (
    <View className="flex-1 bg-red-400 justify-center items-center">
      <Animatable.Text
        animation="bounceInLeft"
        duration={2000}
        className="font-bold text-4xl text-white"
      >
        WELLCOME
      </Animatable.Text>
      <Animatable.Text
        animation="bounceInRight"
        duration={2000}
        className="font-bold text-4xl text-white"
      >
        NEWS APP
      </Animatable.Text>
    </View>
  );
};

export default SplashScreen;
