import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import RadiusButton from "../../components/RadiusButton";
import { COLORS, FONTS } from "../../constants/style";
import AppBar from "./components/AppBar";
import ItemProductCart from "./components/ItemProductCart";

const CartScreen = ({ navigation }: any) => {
  const cartStore = useSelector(
    (state: RootStateOrAny) => state.cartReducer.carts
  );
  const [totalPrice, settTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartStore.forEach((e: any) => {
      total += e.quantily * e.price;
    });
    settTotalPrice(total);
  }, []);

  return (
    <View style={styles.container}>
      {/* App bar  */}
      <View style={{ flex: 1.5 }}>
        <AppBar navigation={navigation} />
      </View>
      {/* body  */}
      <View style={styles.body}>
        <ItemProductCart cartStore={cartStore} />
      </View>

      {/* footer  */}
      <View style={styles.footer}>
        {/* total price  */}
        <View
          style={{
            minWidth: "30%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: FONTS.sizeTitle }}>
            Total
          </Text>
          <Text style={{ color: COLORS.primaryColor, fontWeight: "bold" }}>
            {totalPrice}
            {" VNĐ "}
          </Text>
        </View>
        {/* button checkout  */}
        <View style={{ flex: 1 }}>
          <RadiusButton text={"Checkout"} onPress={() => {}} />
        </View>
      </View>
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
    backgroundColor: COLORS.backgroundColor,
    flex: 1.5,
    justifyContent: "center",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
