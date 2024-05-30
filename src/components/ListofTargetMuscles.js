import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const ListofTargetMuscles = () => {
  const [activeBodyPart, setActiveBodyPart] = useState("arms");

  const data = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];

  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={styles.headerTitle}>Target Muscles</Text>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.tabs, styles.tab(activeBodyPart, item)]}
            onPress={() => {
              setActiveBodyPart(item);
            }}
          >
            <Text style={[styles.tabText(activeBodyPart, item)]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item?.job_id}
        contentContainerStyle={{ columnGap: 8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListofTargetMuscles;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 15,
    color: "palevioletred",
    marginLeft: 20,
    fontWeight: "bold",
    padding: 10,
  },
  headerBtn: {
    fontSize: 10,
    color: "darkgrey",
    marginRight: 20,
    fontWeight: "bold",
  },
  container2: {
    backgroundColor: "lavender",
    width: "95%",
    borderRadius: 7,
    margin: 10,
    flex: 1,
    alignSelf: "center",
  },
  tabs: {
    backgroundColor: "lavender",
    width: "95%",
    borderRadius: 7,
    margin: 3,
    flex: 1,
    alignSelf: "center",
  },
  tab: (activeExType, item) => ({
    padding: 10,
    borderWidth: 3,
    borderColor: activeExType === item ? "palevioletred" : "lavender",
  }),
  tabText: (activeExType, item) => ({
    fontSize: 12,
    color: activeExType === item ? "white" : "darkgrey",
    textShadowColor:
      activeExType === item ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  }),
});
