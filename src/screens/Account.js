import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Keyboard } from "react-native";


const Account = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.pinkSquare}>
          <Image
            style={styles.photoSquare}
            source={require("/Users/tamaramarie/Desktop/FCC_ReactNative/FitnessApp/src/images/Rectangle_3.png")}
          />
          <View style={styles.nameSquare}>
            <Text style={styles.name}>Mayim Howard</Text>
          </View>

          <View style={styles.bio}>
            <View style={styles.height}>
              <MaterialCommunityIcons
                name="human-male-height"
                size={30}
                color="white"
              />
              <Text style={styles.bioText}> 168 cm</Text>
            </View>
            <View style={styles.weight}>
              <FontAwesome5 name="weight" size={30} color="white" />
              <Text style={styles.bioText}> 60 Kgs</Text>
            </View>
          </View>

          <View style={styles.bio2}>
            <View style={styles.height}>
              <Text style={styles.bioText}>BMI:</Text>
              <Text style={styles.bioText}> 21.26</Text>
            </View>
            <View style={styles.weight}>
              <SimpleLineIcons name="energy" size={30} color="white" />
              <Text style={styles.bioText}> Healthy</Text>
            </View>
          </View>
        </View>

        <Button
          style={styles.Button}
          title="Save Note"
          onPress={Keyboard.dismiss}
          color="white"
        />

        <ScrollView style={styles.purpleSquare}>
          <TextInput
            value={note}
            onChangeText={(text) => setNote(text)}
            style={styles.noteText}
            multiline={true}
            numberOfLines={4}
            placeholder="Write something :)"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  purpleSquare: {
    width: "85%",
    height: "50%",
    backgroundColor: "lavender",
    margin: 10,
    borderRadius: 12,
  },
  pinkSquare: {
    width: "85%",
    height: "40%",
    backgroundColor: "palevioletred",
    margin: 30,
    marginBottom: 10,
    borderRadius: 12,
  },
  photoSquare: {
    position: "absolute",
    width: "30%",
    height: "40%",
    backgroundColor: "palevioletred",
    top: 0,
    left: 20,
    margin: 20,
    borderRadius: 23,
    borderColor: "white",
    borderWidth: 6,
  },
  nameSquare: {
    position: "absolute",
    width: "50%",
    height: "40%",
    top: 0,
    right: 10,
    margin: 20,
    borderRadius: 23,
  },
  name: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    fontSize: 48,
    padding: 10,
  },
  noteText: {
    color: "grey",
    fontSize: 28,
    padding: 10,
  },
  profile_pic: {
    backgroundColor: "lavender",
    width: "20%",
    height: "90%",
  },
  bio: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "35%",
    left: 0,
    right: 0,
  },
  bio2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "15%",
    left: 0,
    right: 0,
  },
  height: {
    left: 40,
    flexDirection: "row",
  },
  weight: {
    right: 40,
    flexDirection: "row",
  },
  bioText: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
  },
  Button: {
    right: 0,
    top: 0,
  },
  buttonContainer: {
    position: "absolute",
    top: 10, // Adjust this value to fine-tune the position
    right: 10, // Adjust this value to fine-tune the position
  },
});

export default Account;
