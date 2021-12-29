import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Products from "../../../api/products";
import ItemProduct from "../../../components/ItemProduct";
import { FONTS } from "../../../constants/style";

const Recommended = ({ navigation }: any) => {
  const handleClickProduct = (item: any) => {
    navigation.navigate("DetailProduct", { product: item });
  };
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => handleClickProduct(item)}>
      <ItemProduct
        id={item.id}
        title={item.title}
        image={item.image}
        description={item.description}
        price={item.price}
        isLike={item.isLike}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.recommendContainer}>
      <Text style={styles.recommendTitle}>Recommended Combo</Text>
      <FlatList
        style={styles.listProducts}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={Products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  recommendContainer: {},
  recommendTitle: {
    fontSize: FONTS.sizeTitle,
    fontWeight: "bold",
  },
  listProducts: {
    marginVertical: 10,
  },
});
