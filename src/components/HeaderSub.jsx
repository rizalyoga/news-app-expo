import { View, Text, TouchableOpacity } from "react-native";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/solid";

const HeaderSub = ({ navigation }) => {
  const { getState } = navigation;
  const currentPage = getState().routes.at(-1)?.name;

  const SearchHanlder = () => {
    navigation.navigate("Search");
  };

  return (
    <View className="pt-6 bg-white mb-2" style={{ elevation: 4 }}>
      <View className="mx-2 py-4 flex flex-row justify-between items-center">
        <ArrowLeftIcon
          color={"#000"}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text className="text-lg text-red-400 font-bold">Today's News</Text>
        <TouchableOpacity
          className={currentPage == "Search" ? "hidden" : ""}
          onPress={() => SearchHanlder()}
        >
          <MagnifyingGlassIcon color={"#000"} size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderSub;
