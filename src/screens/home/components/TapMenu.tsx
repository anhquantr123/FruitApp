import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FONTS } from "../../../constants/style";

const TapMenu = ({ navigation }: any) => {
  const nameTap = [
    {
      id: "1",
      name: "Hottest",
    },
    {
      id: "2",
      name: "Popular",
    },
    {
      id: "3",
      name: "New combo",
    },
    {
      id: "4",
      name: "Top",
    },
  ];

  const [tapActive, setTapActive] = useState("1");
  const handleClickTap = (id: String) => {
    setTapActive(id.toString());
  };

  const renderItemNameTap = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => handleClickTap(item.id)}>
        {tapActive === item.id ? (
          <Text style={[styles.nameTap, styles.nameTapActive]}>
            {item.name}
          </Text>
        ) : (
          <Text style={[styles.nameTap]}>{item.name}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={nameTap}
        renderItem={renderItemNameTap}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TapMenu;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  nameTap: {
    marginRight: 50,
    alignSelf: "center",
    fontSize: FONTS.sizeBody,
  },
  nameTapActive: {
    fontSize: FONTS.sizeTitle,
    fontWeight: "bold",
  },
});
