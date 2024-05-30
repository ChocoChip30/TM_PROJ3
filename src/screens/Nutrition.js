import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import SearchRecipe from "../components/SearchRecipe";
import RecipeofDay from "../components/RecipeofDay";

const Nutrition = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <SearchRecipe />
        <RecipeofDay />
      </View>
    </SafeAreaView>
  );
};

export default Nutrition;
