import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { COLORS, FONTS, THEMES } from "../../constants/style";
import * as Animatable from "react-native-animatable";
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
      <Animatable.View animation={"bounceIn"} duration={1500}>
        <Image
          style={styles.imgLogo}
          source={require("../../../assets/images/logo.png")}
        ></Image>
      </Animatable.View>
      <View style={styles.backgroundTitle}>
        <Animatable.Text animation={"bounceInDown"} style={styles.title}>
          Fruit App
        </Animatable.Text>
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
  imgLogo: { alignSelf: "center", top: -20 },
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
