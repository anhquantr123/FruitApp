import React, { useRef } from "react";
import { Image, StyleSheet, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, THEMES } from "../../../constants/style";

const Input = () => {
  const handleClickIconSearch = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.backgroundInput}>
        <View style={styles.searchIcon}>
          <TouchableOpacity onPress={handleClickIconSearch}>
            <Image
              source={require("../../../../assets/icons/search.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Search for fruit salad combos"></TextInput>
      </View>
      {/* button menu */}
      <TouchableOpacity style={styles.menu}>
        <Image source={require("../../../../assets/icons/menu.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    backgroundColor: COLORS.backgroundColor,
    marginVertical: 15,
  },
  backgroundInput: {
    backgroundColor: "#f3f4f9",
    flexDirection: "row",
    flex: 1,
    minHeight: 50,
    justifyContent: "flex-start",
    borderRadius: THEMES.radius,
  },
  searchIcon: {
    paddingHorizontal: 15,
    alignSelf: "center",
  },
  menu: {
    marginHorizontal: 10,
  },
});
