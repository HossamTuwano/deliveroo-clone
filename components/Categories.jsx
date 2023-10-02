import { Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 1 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 2 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 3 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 3 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 3 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 3 "
      />
      <CategoryCard
        imgUri="https://links.papareact.com/gn7"
        title="testing 3 "
      />
    </ScrollView>
  );
};

export default Categories;
