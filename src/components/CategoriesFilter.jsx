import React from "react";
import { TouchableOpacity, ScrollView, Text, View } from "react-native";

const CategoriesFilter = ({ categories, select, setFilter }) => {
  return (
    <View className="mx-2 my-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            onPress={() => {
              setFilter(index);
            }}
            key={category.id}
            className={
              select == index
                ? "py-1 px-4 bg-red-500 mr-2 rounded-md shadow-sm"
                : "py-1 px-4 bg-white mr-2 rounded-md shadow-md"
            }
            style={{ elevation: 2 }}
          >
            <Text
              className={
                select == index
                  ? "text-base text-white"
                  : "text-base text-slate-700"
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
