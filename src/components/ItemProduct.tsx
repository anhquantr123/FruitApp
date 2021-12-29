import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, THEMES } from "../constants/style";
import LikeIcon from "../icons/LikeIcon";

type product = {
  image: any;
  title: String;
  price: number;
  description: string;
  isLike: boolean;
};

const ItemProduct = (props: product) => {
  const [isLike, setIsLike] = useState(props.isLike);

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
      <Text style={styles.textTitle}>{props.title}</Text>
      <View style={styles.flexRow}>
        {/* text price product  */}
        <Text style={styles.textPrice}>
          {props.price != null && `${props.price} VNĐ`}
        </Text>
        {/* button add product  */}
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            console.log("you click add ");
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
    height: 183,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,

    elevation: 5,
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
    marginVertical: 5,
  },
  flexRow: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textPrice: {
    color: COLORS.primaryColor,
    fontSize: 15,
  },
});
