import React, { useEffect } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants/style";
import { RootStateOrAny, useSelector } from "react-redux";

const Appbar = () => {
  const state = useSelector(
    (state: RootStateOrAny) => state.cartReducer.totalQuantily
  );

  return (
    <View style={styles.containerAppbar}>
      {/* drawer menu */}
      <TouchableOpacity>
        <Image
          source={require("../../../../assets/icons/drawerMenu.png")}
        ></Image>
      </TouchableOpacity>

      {/* button basket */}
      <View>
        <TouchableOpacity>
          <Image
            source={require("../../../../assets/icons/bagket.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.bagIcon}>
          <Text style={styles.textBagIcon}>{state}c</Text>
        </View>
      </View>
      {/* bag icon  */}
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  containerAppbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  bagIcon: {
    height: 20,
    width: 20,
    backgroundColor: "red",
    position: "absolute",
    borderRadius: 15,
    left: 13,
    top: -5,
    borderWidth: 1,
    borderColor: COLORS.colorWhite,
  },
  textBagIcon: {
    flex: 1,
    fontSize: 13,
    color: COLORS.colorWhite,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
