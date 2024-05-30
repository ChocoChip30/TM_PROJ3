import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import FitnessCards from "../components/FitnessCards";

const WorkoutPlan = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>0</Text>
          <MaterialCommunityIcons name="run-fast" size={24} color="grey" />
        </View>
        <View>
          <Text style={styles.text}>0</Text>
          <MaterialIcons name="local-fire-department" size={24} color="grey" />
        </View>
        <View>
          <Text style={styles.text}>0</Text>
          <Feather name="clock" size={24} color="grey" />
        </View>
      </View>

      <FitnessCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  image_view: {
    justifyContent: "center",
    alignItems: "center",
  },
  image_exercise: {
    width: "90%",
    height: 200,
    marginTop: 20,
    borderRadius: 7,
  },
});

export default WorkoutPlan;
