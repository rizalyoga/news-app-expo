import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../components/Header";
import { getTopHeadlines } from "../../data/getDataTopHeadline";
import CategoriesFilter from "../components/CategoriesFilter";
import Card from "../components/Card";
import Loading from "../components/Loading";

const HomeScreen = ({ navigation }) => {
  const [dataTopHeadline, setDataTopHeadline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(0);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
  ]);

  useEffect(() => {
    setLoading((loading) => !loading);
    getTopHeadlines(categories[select].category)
      .then((res) => {
        setDataTopHeadline(res.articles);
      })
      .then(() => {
        setLoading((loading) => !loading);
      });
  }, [select]);

  const setFilter = (index) => {
    setSelect(index);
  };

  return (
    <View className="flex-1 bg-slate-200">
      <Header navigation={navigation} />
      <CategoriesFilter
        categories={categories}
        select={select}
        setFilter={setFilter}
      />
      {loading ? (
        <Loading />
      ) : (
        <View className="mx-2 flex-1">
          <FlatList
            data={dataTopHeadline}
            renderItem={({ item }) => <Card item={item} />}
          />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
