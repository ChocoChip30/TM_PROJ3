import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import SearchExCard from "./SearchExCard";
import useFetch from "./useFetch";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Results = ({ route }) => {
  const { searchTerm } = route.params;
  const navigation = useNavigation();
  console.log(searchTerm);
  const bodyparts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  let first = "";

  if (bodyparts.includes(searchTerm)) {
    first = "bodyPart";
  } else {
    first = "target";
  }

  const { data, isLoading, error } = useFetch(`/${first}/${searchTerm}`);
  const handleBack = () => {
    // Navigate back to the SearchScreen
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={handleBack}>
          <AntDesign name="arrowleft" size={24} color="palevioletred" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Results</Text>
      </View>

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

export default Results;

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
