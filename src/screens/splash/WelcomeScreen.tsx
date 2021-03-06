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
import { COLORS, FONTS, THEMES } from "../../constants/style";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewer}>
        <Image
          source={require("../../../assets/images/imageWelcome.png")}
        ></Image>
      </View>
      {/* content */}
      <View style={styles.content}>
        <Text style={styles.textTitle}>Get The Freshest Fruit Salad Combo</Text>
        <Text>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
      </View>
      {/* button  */}
      <View style={styles.button}>
        <RadiusButton
          text={"Let's Continue"}
          onPress={() => {
            navigation.replace("Authen");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  viewer: {
    flex: 5,
    backgroundColor: COLORS.primaryColor,
    justifyContent: "center",
    alignItems: "center",
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
    marginHorizontal: 10,
  },
});
