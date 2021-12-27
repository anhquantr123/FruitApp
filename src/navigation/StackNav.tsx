import { createStackNavigator } from "@react-navigation/stack";

import { SCREENS } from "../constants/screenDefault";
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen name="Splash" component={SCREENS.SplashScreen} />
      <Stack.Screen name="Welcome" component={SCREENS.WelcomeScreen} />
      <Stack.Screen name="Authen" component={SCREENS.AuthenScreen} />
      <Stack.Screen name="Home" component={SCREENS.HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
