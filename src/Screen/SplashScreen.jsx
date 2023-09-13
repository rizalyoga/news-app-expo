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
    <View className="flex-1 bg-slate-600 justify-center items-center">
      <Animatable.Text
        animation="bounceInLeft"
        duration={2000}
        className="font-bold text-4xl text-white"
      >
        Wellcome
      </Animatable.Text>
      <Animatable.Text
        animation="bounceInRight"
        duration={2000}
        className="font-bold text-4xl text-white"
      >
        News APP
      </Animatable.Text>
    </View>
  );
};

export default SplashScreen;
