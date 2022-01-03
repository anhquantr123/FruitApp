import StackNav from "./src/navigation/StackNav";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configStore from "./src/stores/combieStores/store";

const store = configStore();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
}
