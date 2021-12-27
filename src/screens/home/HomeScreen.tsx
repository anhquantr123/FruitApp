import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { COLORS, FONTS, THEMES } from "../../constants/style";
import Appbar from "./components/Appbar";
import Input from "./components/Input";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Appbar */}
      <Appbar />
      {/* HeadingTitle  */}
      <Text style={styles.headingTitle}>
        Hello Thuy Trang, what fruit salad combo do you want today?
      </Text>
      {/* input  */}
      <Input />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.backgroundColor,
    padding: THEMES.padding,
  },
  headingTitle: {
    fontSize: FONTS.sizeTitle,
    fontWeight: "bold",
  },
});
