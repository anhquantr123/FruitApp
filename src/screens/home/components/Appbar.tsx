import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Appbar = () => {
  return (
    <View style={styles.containerAppbar}>
      {/* drawer menu */}
      <TouchableOpacity>
        <Image
          source={require("../../../../assets/icons/drawerMenu.png")}
        ></Image>
      </TouchableOpacity>

      {/* button basket */}
      <TouchableOpacity>
        <Image source={require("../../../../assets/icons/bagket.png")}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  containerAppbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
