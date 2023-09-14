import React, { useState } from "react";
import { TouchableOpacity, ScrollView, Text, View } from "react-native";

const CategoriesFilter = ({ categories, select, setFilter }) => {
  return (
    <View className="mx-2 my-4 ">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            onPress={() => {
              setFilter(index);
            }}
            key={category.id}
            className={
              select == index
                ? "py-2 px-4 bg-red-500 mr-2 rounded-md shadow-sm"
                : "py-2 px-4 bg-white mr-2 rounded-md shadow-md"
            }
          >
            <Text
              className={
                select == index
                  ? "text-lg text-white"
                  : "text-lg text-slate-700"
              }
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;
