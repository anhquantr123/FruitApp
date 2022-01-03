import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { COLORS, THEMES } from "../constants/style";
import LikeIcon from "../icons/LikeIcon";
import { addToCart } from "../stores/actions/actionCar";

type product = {
  id: number;
  image: any;
  title: String;
  price: number;
  description: string;
  isLike: boolean;
};

const ItemProduct = (props: product) => {
  const [isLike, setIsLike] = useState(props.isLike);

  const dispatch = useDispatch();

  return (
    <View style={styles.itemProductContainer}>
      {/* like icon */}
      <TouchableOpacity
        style={styles.likeIcon}
        //activeOpacity={1}
        onPress={(e) => {
          e.stopPropagation();
          setIsLike(!isLike);
        }}
      >
        <LikeIcon isLike={isLike} size={24} />
      </TouchableOpacity>
      {/* image produc */}
      <Image source={props.image} style={styles.image}></Image>
      {/* title product  */}
      <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textTitle}>
        {props.title}
      </Text>
      <View style={styles.flexRow}>
        {/* text price product  */}
        <Text style={styles.textPrice}>
          {props.price != null && `${props.price} VNĐ`}
        </Text>
        {/* button add product  */}
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={(e) => {
            e.stopPropagation();
            dispatch(addToCart({ ...props, quantily: 1 }));
          }}
        >
          <Image source={require("../../assets/icons/add.png")}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  itemProductContainer: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
    width: 152,
    height: 190,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.0,

    elevation: 1,
    marginRight: 10,
    borderRadius: THEMES.radius,
  },
  likeIcon: {
    alignSelf: "flex-end",
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: "cover",
    alignSelf: "center",
  },
  textTitle: {
    fontWeight: "bold",
    //alignSelf: "center",
  },
  flexRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textPrice: {
    color: COLORS.primaryColor,
    fontSize: 15,
    alignSelf: "flex-end",
  },
});
