import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, THEMES } from "../../../constants/style";

const AppBar = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* go back button  */}
      <TouchableOpacity
        style={styles.btnGoback}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
        <Text>Go back</Text>
      </TouchableOpacity>
      {/* title app bar  */}

      <Text style={styles.textTitle}>My Basket</Text>
      {/* ?\ */}
      <View
        style={[styles.btnGoback, { backgroundColor: COLORS.primaryColor }]}
      >
        <Ionicons name="chevron-back" size={20} color={COLORS.primaryColor} />
        <Text style={{ color: COLORS.primaryColor }}>Go back</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
    padding: THEMES.padding,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnGoback: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: "flex-start",
    backgroundColor: COLORS.colorWhite,
    borderRadius: THEMES.radius,
    flexDirection: "row",
    margin: 10,
  },
  textTitle: {
    fontWeight: "bold",
    alignSelf: "center",
    color: COLORS.colorWhite,
    fontSize: FONTS.sizeBody,
  },
});
