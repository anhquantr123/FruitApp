import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { COLORS, THEMES } from "../../constants/style";
import { RootStateOrAny, useSelector } from "react-redux";

import AppBar from "./components/AppBar";

const CartScreen = ({ navigation }: any) => {
  const cartStore = useSelector(
    (state: RootStateOrAny) => state.cartReducer.carts
  );
  console.log("this is cart view ");
  console.log(cartStore);
  return (
    <View style={styles.container}>
      {/* App bar  */}
      <View style={{ flex: 2 }}>
        <AppBar navigation={navigation} />
      </View>
      {/* body  */}
      <View style={styles.body}>
        <Text>hello anh quan 123</Text>
      </View>

      <View style={styles.footer}></View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.backgroundColor,
  },
  body: {
    flex: 8,
  },
  footer: {
    backgroundColor: "#000",
    flex: 1.5,
  },
});
