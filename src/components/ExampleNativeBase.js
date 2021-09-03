import React from "react";
// import { View, Text } from "react-native";
import { NativeBaseProvider, Box } from "native-base";

export default function ExampleNativeBase() {
  return (
    <NativeBaseProvider>
      <Box>Hello world From Native Base</Box>
    </NativeBaseProvider>
  );
}
