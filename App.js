import React from "react";
import { NativeBaseProvider } from "native-base";

// import components
// import LoginForm from "./src/Pages/LoginForm";
// import RegisterForm from "./src/Pages/RegisterForm";
import AddArtist from "./src/Pages/Artist/AddArtist";

export default function App() {
  return (
    <NativeBaseProvider>
      <AddArtist />
    </NativeBaseProvider>
  );
}
