import { StyleSheet, Text, View, StatusBar } from "react-native";
import { SCREENS } from "./src/constants/screenDefault";

export default function App() {
  return (
    <View style={styles.container}>
      <SCREENS.SplashScreen />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
