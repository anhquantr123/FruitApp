import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";

import { COLORS, FONTS, THEMES } from "../../constants/style";
import RadiusButton from "../../components/RadiusButton";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { setName } from "../../stores/actions/actionApp";

const AuthenScreen = ({ navigation }: any) => {
  const [valueName, setValueName] = useState(String);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewer}>
        <Image
          source={require("../../../assets/images/imageAuthen.png")}
        ></Image>
      </View>
      {/* content */}
      <View style={styles.content}>
        <Text style={styles.textTitle}>What is your firstname?</Text>
        <TextInput
          value={valueName}
          placeholder="Input name...."
          onChangeText={(text) => setValueName(text)}
          style={{
            borderRadius: THEMES.radius,
            backgroundColor: "#f3f1f1",
            padding: 10,
          }}
        />
      </View>
      {/* button  */}
      <View style={styles.button}>
        <RadiusButton
          text={"Start Ordering"}
          onPress={() => {
            dispatch(setName({ nameUser: valueName }));
            navigation.replace("Home");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.backgroundColor,
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
