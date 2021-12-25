import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import RadiusButton from "../../components/RadiusButton";
import { COLORS, FONTS } from "../../constants/style";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewer}>
        <Image
          style={{ alignSelf: "center", top: 50 }}
          source={require("../../../assets/images/imageWelcome.png")}
        ></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.textTitle}>Get The Freshest Fruit Salad Combo</Text>
        <Text>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
      </View>

      <View style={styles.button}>
        <RadiusButton text={"Let's Continue"} />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    flexDirection: "column",
  },
  viewer: {
    flex: 6,
    backgroundColor: COLORS.primaryColor,
  },
  content: {
    flex: 3,
    marginHorizontal: 10,
  },
  textTitle: {
    fontSize: FONTS.sizeTitle,
    marginVertical: 20,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: FONTS.sizeBody,
  },
  button: {
    flex: 1,
    margin: 10,
  },
});
