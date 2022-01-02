import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStateOrAny, useSelector } from "react-redux";
import { COLORS } from "../../../constants/style";

const Appbar = ({ navigation }: any) => {
  const state = useSelector(
    (state: RootStateOrAny) => state.cartReducer.totalQuantily
  );

  return (
    <View style={styles.containerAppbar}>
      {/* drawer menu */}
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require("../../../../assets/icons/drawerMenu.png")}
        ></Image>
      </TouchableOpacity>

      {/* button basket */}
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Image
            source={require("../../../../assets/icons/bagket.png")}
          ></Image>
        </TouchableOpacity>
        {state === 0 ? null : (
          <View style={styles.bagIcon}>
            <Text style={styles.textBagIcon}>{state}</Text>
          </View>
        )}
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
    bottom: 15,
  },
  textBagIcon: {
    flex: 1,
    fontSize: 13,
    color: COLORS.colorWhite,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
});
