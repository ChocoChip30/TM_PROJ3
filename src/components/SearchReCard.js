import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchReCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container2}>
      <TouchableOpacity
        style={styles.pressable}
        onPress={() => {
          navigation.navigate("ClickedRecipe", item);
        }}
      >
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchReCard;

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "honeydew",
    width: "95%",
    borderRadius: 7,
    margin: 10,
    flex: 1,
    alignSelf: "center",
  },
  pressable: {
    margin: 5,
  },
  text: {
    color: "darkgrey",
    fontWeight: "bold",
    fontSize: 20,
    padding: 8,
    margin: 10,
    flex: 1,
    flexWrap: "wrap",
    // textShadowColor: "rgba(0, 0, 0, 0.25)",
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 10,
  },
  image2: {
    height: 90,
    width: 90,
    borderRadius: 7,
  },
});
