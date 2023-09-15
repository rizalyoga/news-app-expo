import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import HeaderSub from "../components/HeaderSub";
import { WebView } from "react-native-webview";

const WebviewScreen = ({ navigation, route }) => {
  const { url } = route.params;

  return (
    <>
      <HeaderSub navigation={navigation} />
      <View className="mx-2 my-4">
        <WebView
          className="flex-1"
          source={{ uri: url }}
          originWhitelist={["*"]}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="#EF4444"
              size="large"
              style={{
                flex: 1,
              }}
            />
          )}
        />
      </View>
    </>
  );
};

export default WebviewScreen;
