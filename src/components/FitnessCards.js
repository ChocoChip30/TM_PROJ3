import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import fitness from "../utils/fitData";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

const FitnessCards = () => {
  const fitdata = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {fitdata.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Exercises", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
              name: item.name,
            })
          }
          style={styles.pressable}
          key={key}
        >
          <Image style={styles.image} source={item.image} />
          <Text style={styles.text}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  image: {
    width: "95%",
    height: 200,
    borderRadius: 7,
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
