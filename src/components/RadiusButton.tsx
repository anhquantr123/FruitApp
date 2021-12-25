import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, THEMES } from "../constants/style";

type radiusButton = {
  text?: String;
};
const RadiusButton = ({ text }: radiusButton) => {
  return (
    <TouchableOpacity style={styles.backgroundButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RadiusButton;

const styles = StyleSheet.create({
  backgroundButton: {
    backgroundColor: COLORS.primaryColor,
    padding: 15,
    borderRadius: THEMES.radius,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: FONTS.sizeBody,
    color: COLORS.colorWhite,
    textAlign: "center",
  },
});
