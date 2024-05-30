import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

const EachExercise = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const exercises = route.params.exercises;
  const current = exercises[index];

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: current.image }} />
      <Text style={styles.text}>{current.name}</Text>
      <Text style={styles.text}>x {current.sets}</Text>
      {index + 1 >= exercises.length ? (
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.navigate("WorkoutPlan");
            setTimeout(() => {
              setIndex(0);
            }, 2000);
          }}
        >
          <Text style={styles.button_text_done}>Done</Text>
        </Pressable>
      ) : (
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
        >
          <Text style={styles.button_text_done}>Done</Text>
        </Pressable>
      )}

      <View style={styles.skip_prev_view}>
        {index - 1 < 0 ? (
          <Pressable
            style={[styles.pressable2, styles.prev]}
            onPress={() => {
              navigation.navigate("WorkoutPlan");
              setTimeout(() => {
                setIndex(0);
              }, 2000);
            }}
          >
            <Text style={styles.button_text}>Previous</Text>
          </Pressable>
        ) : (
          <Pressable
            style={[styles.pressable2, styles.prev]}
            onPress={() => {
              //navigation.navigate('Rest')
              setTimeout(() => {
                setIndex(index - 1);
              });
            }}
          >
            <Text style={styles.button_text}>Previous</Text>
          </Pressable>
        )}

        {index + 1 >= exercises.length ? (
          <Pressable
            style={[styles.pressable2, styles.skip]}
            onPress={() => {
              navigation.navigate("WorkoutPlan");
              setTimeout(() => {
                setIndex(0);
              }, 2000);
            }}
          >
            <Text style={styles.button_text}>Skip</Text>
          </Pressable>
        ) : (
          <Pressable
            style={[styles.pressable2, styles.skip]}
            onPress={() => {
              //navigation.navigate('Rest')
              setTimeout(() => {
                setIndex(index + 1);
              });
            }}
          >
            <Text style={styles.button_text}>Skip</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default EachExercise;

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 300,
    borderRadius: 7,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 8,
  },
  pressable: {
    backgroundColor: "thistle",
    width: "50%",
    alignItems: "center",
    padding: 8,
    borderRadius: 9,
    marginTop: 30,
  },
  button_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkgrey",
  },
  button_text_done: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  skip_prev_view: {
    flexDirection: "row",
  },
  pressable2: {
    margin: 30,
    marginTop: 50,
    width: "30%",
    alignItems: "center",
    padding: 8,
    borderRadius: 9,
  },
  skip: {
    backgroundColor: "mistyrose",
  },
  prev: {
    backgroundColor: "mistyrose",
  },
});
