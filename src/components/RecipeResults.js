import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import SearchReCard from "./SearchReCard";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import useRecipe from "./useRecipe";

const RecipeResults = ({ route }) => {
  const { searchTerm } = route.params;
  const navigation = useNavigation();
  console.log(searchTerm);

  const { data, isLoading, error } = useRecipe(searchTerm);
  const handleBack = () => {
    // Navigate back to the SearchScreen
    navigation.navigate("Nutrition");
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
          renderItem={({ item }) => <SearchReCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RecipeResults;

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
