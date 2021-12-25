import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { COLORS, FONTS, THEMES } from "../../constants/style";
//import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ navigation }: any) => {
  //const navigation = useNavigation();
  useEffect(() => {
    var timeout = setTimeout(() => navigation.replace("Welcome"), 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.imgLogo}
        source={require("../../../assets/images/logo.png")}
      ></Image>
      <View style={styles.backgroundTitle}>
        <Text style={styles.title}>Fruit App</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  imgLogo: { marginLeft: 15, top: -20 },
  backgroundTitle: {
    minWidth: "40%",
    minHeight: 30,
    backgroundColor: COLORS.primaryColor,
    borderTopLeftRadius: THEMES.radius,
    borderBottomRightRadius: THEMES.radius,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: FONTS.sizeTitle,
  },
});
