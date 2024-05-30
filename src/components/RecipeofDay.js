import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import SearchReCard from "./SearchReCard";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import useRecipe from "./useRecipe";

types = [
  "chinese",
  "indian",
  "french",
  "spanish",
  "jewish",
  "thai",
  "chicken",
  "fish",
  "vegan",
  "honey",
  "spicy",
  "japanese",
  "salad",
  "potato",
  "noodle",
];
var randomNumber = Math.floor(Math.random() * types.length);
var rando = types[randomNumber];

const RecipeofDay = () => {

  const { data, isLoading, error } = useRecipe(rando);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Try some {rando} recipes today!</Text>

      {isLoading ? (
        <ActivityIndicator size={"large"} colors={"palevioletred"} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <SearchReCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RecipeofDay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
  },
  text: {
    color: "grey",
    fontSize: 48,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
  },
  headerBtn: {
    fontSize: 10,
    color: "darkgrey",
    marginRight: 20,
    fontWeight: "bold",
  },
});
