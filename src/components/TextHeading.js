import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TextHeading() {
  const title = "This is Component Header.";
  return (
    <View>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    textAlign: "center",
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
