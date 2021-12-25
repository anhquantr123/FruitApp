import { SCREENS } from "./src/constants/screenDefault";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SCREENS.SplashScreen} />
        <Stack.Screen name="Welcome" component={SCREENS.WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
