import { View, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";

const Header = () => {
  const SearchHanlder = () => {
    alert("Search News");
  };

  return (
    <View className="pt-6 bg-white shadow-md mb-2">
      <View className="mx-4 py-4 flex flex-row justify-between items-center">
        <Text className="text-lg">Header Component</Text>
        <TouchableOpacity onPress={() => SearchHanlder()}>
          <MagnifyingGlassIcon color={"#000"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
