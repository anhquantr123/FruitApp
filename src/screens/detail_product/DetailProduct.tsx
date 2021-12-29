import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, THEMES } from "../../constants/style";
import { Ionicons } from "@expo/vector-icons";
import RadiusButton from "../../components/RadiusButton";
import LikeIcon from "../../icons/LikeIcon";

const DetailProduct = ({ navigation, route }: any) => {
  const product = route.params.product;
  const [isLike, setIsLike] = useState(product.isLike);
  return (
    <View style={styles.container}>
      {/* go back button  */}
      <TouchableOpacity
        style={styles.btnGoback}
        onPress={() => {
          navigation.pop();
        }}
      >
        <Ionicons name="chevron-back" size={20} color="black" />
        <Text>Go back</Text>
      </TouchableOpacity>
      {/* image product  */}
      <View style={styles.image}>
        <Image
          source={product.image}
          style={{ width: 170, height: 170 }}
        ></Image>
      </View>
      {/* detail  */}
      <View style={styles.detailProduct}>
        {/*  title product  */}
        <Text style={styles.textTitle}>{product.title}</Text>
        {/* change quantily product in cart   */}
        <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
          <View style={styles.flexRow}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/icons/minus.png")}
              ></Image>
            </TouchableOpacity>

            <Text style={styles.textQuantily}>1</Text>
            <TouchableOpacity onPress={() => {}}>
              <Image source={require("../../../assets/icons/plus.png")}></Image>
            </TouchableOpacity>
          </View>
          {/* price  */}
          <Text style={styles.textPrice}>
            {product.price && `${product.price} VNĐ`}
          </Text>
        </View>

        {/* button add to basket  */}
        <View style={styles.btnAddToBasket}>
          <View style={styles.flexRow}>
            {/* add like button  */}
            <TouchableOpacity
              style={{ marginHorizontal: 15, marginTop: 5 }}
              onPress={() => setIsLike(!isLike)}
            >
              <LikeIcon isLike={isLike} size={36} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <RadiusButton text={"Add to basket"} onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primaryColor,
  },
  btnGoback: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: "flex-start",
    backgroundColor: COLORS.colorWhite,
    borderRadius: THEMES.radius,
    flexDirection: "row",
    margin: 10,
  },
  image: {
    alignSelf: "center",
    marginVertical: 10,
  },
  detailProduct: {
    marginTop: 20,
    backgroundColor: COLORS.colorWhite,
    borderTopLeftRadius: THEMES.radius,
    borderTopRightRadius: THEMES.radius,
    flex: 1,
  },
  textTitle: {
    fontSize: FONTS.sizeTitle,
    fontWeight: "bold",
    padding: 10,
  },
  flexRow: {
    marginVertical: 5,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  textQuantily: {
    marginHorizontal: 15,
    alignSelf: "center",
    fontSize: FONTS.sizeBody,
  },
  textPrice: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: FONTS.sizeBody,
  },
  btnAddToBasket: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
