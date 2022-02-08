import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import SubStack from "./SubStack";
import LibraryStack from "./LibraryStack";
import Tab from "./Tab";
import { SafeAreaView } from "react-native";

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
