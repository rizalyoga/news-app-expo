import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { getDataBasedOnKeyword } from "../../data/getData";
import HeaderSub from "../components/HeaderSub";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { PaperAirplaneIcon } from "react-native-heroicons/solid";

const SearchScreen = ({ navigation }) => {
  const [keyword, onChangeKeyword] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = () => {
    setLoading((loading) => !loading);
    getDataBasedOnKeyword(keyword)
      .then((res) => {
        if (res.articles.length < 1) {
          alert("Sorry, there's no article about this keyword");
        } else {
          setNewsData(res.articles);
        }
      })
      .then(() => {
        setLoading((loading) => !loading);
      });
  };

  return (
    <>
      <HeaderSub navigation={navigation} />
      <View className="flex-1 mx-2">
        <View className="flex-row items-center relative">
          <TextInput
            className="w-full text-base my-4 h-10 border-solid border-2 py-2 px-4 rounded-md border-slate-400 focus:border-blue-400"
            placeholder="Enter your keyword..."
            onChangeText={(keyword) => onChangeKeyword(keyword)}
            value={keyword}
            onSubmitEditing={() => onSubmitHandler()}
          />
          <TouchableOpacity
            className="absolute right-0 mr-2"
            onPress={() => onSubmitHandler()}
          >
            <PaperAirplaneIcon
              color={"#94A3B8"}
              size={22}
              className="bg-slate-400"
            />
          </TouchableOpacity>
        </View>
        <Text className="text-base">Total Result : {newsData.length}</Text>

        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={newsData}
            renderItem={({ item }) => <Card item={item} />}
          />
        )}
      </View>
    </>
  );
};

export default SearchScreen;
