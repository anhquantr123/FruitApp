import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ItemProduct from "../../../components/ItemProduct";
import { FONTS } from "../../../constants/style";

const Recommended = () => {
  return (
    <View>
      <Text style={styles.recommendTitle}>Recommended Combo</Text>
      <ItemProduct />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  recommendTitle: {
    fontSize: FONTS.sizeTitle,
    fontWeight: "bold",
  },
});
