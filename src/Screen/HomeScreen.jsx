import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Header from "../components/Header";
import { getTopHeadlines } from "../../data/getData";
import CategoriesFilter from "../components/CategoriesFilter";
import Card from "../components/Card";
import Loading from "../components/Loading";
import { categoryList } from "../../data/categoryList";

const HomeScreen = ({ navigation }) => {
  const [dataTopHeadline, setDataTopHeadline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState(0);
  const categories = categoryList;

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
