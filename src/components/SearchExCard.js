import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SearchExCard = ({ item }) => {
  return (
    <View style={styles.container2}>
      <Pressable style={styles.pressable}>
        <Image source={{ uri: item.gifUrl }} style={styles.image2} />
        <Text style={styles.text}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default SearchExCard;

const styles = StyleSheet.create({
  container2: {
    backgroundColor: "lavender",
    width: "95%",
    borderRadius: 7,
    margin: 10,
    flex: 1,
    alignSelf: "center",
  },
  pressable: {
    margin: 5,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    padding: 8,
    margin: 10,
    flex: 1,
    flexWrap: "wrap",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image2: {
    height: 90,
    width: 90,
    borderRadius: 7,
  },
});
