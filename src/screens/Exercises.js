import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";

const Exercises = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const i = 1;

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Pressable style={styles.arrow_press} onPress={() => navigation.goBack()}>
            <AntDesign style={styles.arrow} name="arrowleft" size={24} color="black" />
            </Pressable> */}
        <Image style={styles.image} source={route.params?.image} />
        <Text style={styles.text}>{route.params?.name}</Text>
      </View>
      <ScrollView>
        {route.params.exercises.map((item, index) => (
          <View style={styles.container2} key={index}>
            <Pressable style={styles.pressable} key={index}>
              <Image style={styles.image2} source={item.image} />
              <View>
                <Text style={[styles.text2, styles.name]}>{item.name}</Text>
                <Text style={[styles.text2, styles.sets]}>x {item.sets}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={styles.container3}
        onPress={() =>
          navigation.navigate("EachExercise", {
            exercises: route.params.exercises,
          })
        }
      >
        <Text style={styles.start}>Let's go!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Exercises;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontSize: 45,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    //borderRadius: 7,
    opacity: 0.6,
  },
  image2: {
    height: 90,
    width: 90,
    borderRadius: 7,
  },
  pressable: {
    margin: 10,
    flexDirection: "row",
  },
  text2: {
    color: "darkgrey",
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
  },
  sets: {
    fontSize: 15,
    paddingLeft: 10,
  },
  container2: {
    backgroundColor: "lavender",
    width: "95%",
    borderRadius: 7,
    margin: 10,
    flex: 1,
    alignSelf: "center",
  },
  start: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  container3: {
    backgroundColor: "thistle",
    padding: 10,

    // marginLeft: "auto",
    // marginRight: "auto",
    // marginVertical: 10,
    // borderRadius: 7
  },
});
