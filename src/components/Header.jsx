import { View, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Header = ({ navigation }) => {
  const SearchHanlder = () => {
    navigation.navigate("Search");
  };

  return (
    <View className="pt-6 bg-white mb-2" style={{ elevation: 4 }}>
      <View className="mx-2 py-4 flex flex-row justify-between items-center">
        <Text className="text-lg text-red-400 font-bold">Today's News</Text>
        <TouchableOpacity onPress={() => SearchHanlder()}>
          <MagnifyingGlassIcon color={"#000"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
