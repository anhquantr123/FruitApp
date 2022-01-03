import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { COLORS, FONTS, THEMES } from "../../../constants/style";

const ItemProductCart = ({ cartStore }: any) => {
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.container}>
        {/* image  */}
        <Image source={item.image}></Image>
        {/* text  */}
        <View style={{ marginLeft: 10, flex: 1 }}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textPacks}>{item.quantily} Packs</Text>
        </View>
        {/* price */}
        <Text style={styles.textPrice}>{item.price} VNĐ</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={cartStore}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ItemProductCart;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    padding: THEMES.padding,
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: FONTS.sizeBody,
    paddingVertical: 5,
  },
  textPacks: {
    fontSize: FONTS.sizeBody,
    paddingBottom: 5,
  },
  textPrice: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 12,
    color: COLORS.primaryColor,
  },
});
