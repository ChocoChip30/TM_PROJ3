import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ClickedRecipe = (item) => {
  const navigation = useNavigation();
  const ingredients = item.route.params.ingredients;
  const instructions = item.route.params.instructions;
  const title = item.route.params.title;

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
      </View>

      <Text style={styles.headerTitle}>{title}</Text>
      <ScrollView
        style={styles.methodContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Ingredients:</Text>
        <Text style={styles.text}>{ingredients}</Text>
        <Text style={styles.title}>Method:</Text>
        <Text style={styles.text}>{instructions}</Text>
      </ScrollView>
    </View>
  );
};

export default ClickedRecipe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10,
  },
  text: {
    color: "grey",
    fontSize: 18,
    padding: 10,
  },
  title: {
    color: "palevioletred",
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 30,
    color: "white",
    marginLeft: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  headerBtn: {
    fontSize: 10,
    color: "darkgrey",
    marginRight: 20,
    fontWeight: "bold",
  },
  methodContainer: {
    backgroundColor: "lavender",
    height: "85%",
    width: "95%",
    borderRadius: 12,
    alignSelf: "center",
  },
});
