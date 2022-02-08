import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./src/Router";
import Home from "./src/Screens/HomeScreen";
import Library from "./src/Screens/LibraryScreen";
import Shorts from "./src/Screens/ShortsScreen";
import Subscriptions from "./src/Screens/SubscriptionScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Shorts />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
