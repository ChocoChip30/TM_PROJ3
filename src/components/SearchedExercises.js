import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import React from "react";
import { useRouter } from "expo-router";
import FitnessCards from "./FitnessCards";
import SearchExCard from "./SearchExCard";
import useFetch from "./useFetch";

const SearchedExercises = ({ item, pressed }) => {
  const router = useRouter();
  console.log(item);
  console.log(pressed);

  const { data, isLoading, error } = useFetch("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>All Exercises</Text>

      {isLoading ? (
        <ActivityIndicator size={"large"} colors={"palevioletred"} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <SearchExCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: 10 }}
        />
      )}
    </View>
  );
};

export default SearchedExercises;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    marginTop: 10,
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
  },
  headerBtn: {
    fontSize: 10,
    color: "darkgrey",
    marginRight: 20,
    fontWeight: "bold",
  },
});
