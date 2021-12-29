import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, THEMES } from "../../constants/style";
import Appbar from "./components/Appbar";
import Input from "./components/Input";
import Recommended from "./components/Recommended";
import TapMenu from "./components/TapMenu";
import { RootStateOrAny, useSelector } from "react-redux";

const HomeScreen = ({ navigation }: any) => {
  const nameUser = useSelector(
    (state: RootStateOrAny) => state.appReducer.nameUser
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Appbar */}
      <Appbar navigation={navigation} />
      {/* HeadingTitle  */}
      <Text style={styles.headingTitle}>
        Hello {nameUser}, what fruit salad combo do you want today?
      </Text>
      {/* input  */}
      <Input />
      {/* recommended combo */}
      <Recommended navigation={navigation} />
      {/* tap menu  */}
      <TapMenu navigation={navigation} />
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
