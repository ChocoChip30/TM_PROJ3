import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const SearchFilter = ({ data, input, setInput }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={{ marginLeft: 20 }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
                >
                  {item.name}
                </Text>
                <Text></Text>
              </View>
            );
          } else {
            if (item.name.toLowerCase().includes(input.toLowerCase())) {
              return (
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "bold", color: "black" }}
                  >
                    {item.name}
                  </Text>
                  <Text></Text>
                </View>
              );
            }
          }
        }}
      />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({});
