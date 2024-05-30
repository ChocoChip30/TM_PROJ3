import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import ListofBodyParts from "../components/ListofBodyParts";
import ListofTargetMuscles from "../components/ListofTargetMuscles";
import NewSearch from "./NewSearch";
import SearchedExercises from "../components/SearchedExercises";

const SearchBunch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "pink" }}>
      <View
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <NewSearch />
        <ListofBodyParts />
        <ListofTargetMuscles />
        <SearchedExercises />
      </View>
    </SafeAreaView>
  );
};

export default SearchBunch;
