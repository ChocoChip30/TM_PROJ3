import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

const Rest = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const navigation = useNavigation();

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../images/rest.jpg")} />
        <View style={{ position: "absolute", alignItems: "center" }}>
          <Text style={styles.text}>Quick break :)</Text>
          <Text style={styles.text_timeleft}>{timeLeft}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Rest;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 48,
    padding: 10,
  },
  image: {
    height: "100%",
    width: "95%",
    opacity: 0.5,
    borderRadius: 9,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  text_timeleft: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginTop: 20,
  },
});
