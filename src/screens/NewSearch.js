import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    // Navigate to the ResultsScreen with the search term
    navigation.navigate("Results", { searchTerm });
  };

  return (
    <View style={styles.container}>
      <View style={styles.search_box}>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text.toLowerCase())}
          style={styles.text}
          placeholder="  Let's find a fun workout!"
        />
      </View>
      <TouchableOpacity style={styles.search_button} onPress={handleSearch}>
        <Feather
          name="search"
          size={20}
          color={"silver"}
          style={{ marginLeft: 1 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NewSearch;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flexDirection: "row",
  },
  search_box: {
    margin: 8,
    padding: 8,
    flexDirection: "row",
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#d9dbda",
  },
  text: {
    color: "grey",
    fontSize: 12,
    padding: 5,
  },
  search_button: {
    width: 55,
    backgroundColor: "palevioletred",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
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
    // paddingVertical: SIZES.small / 2,
    // paddingHorizontal: SIZES.small,
    // borderRadius: SIZES.medium,
    borderWidth: 3,
    borderColor: activeExType === item ? "palevioletred" : "lavender",
  }),
  tabText: (activeExType, item) => ({
    //fontFamily: FONT.medium,
    color: activeExType === item ? "white" : "darkgrey",
    textShadowColor:
      activeExType === item ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }),
});
