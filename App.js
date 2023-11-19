import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigator } from "./Navigator";
import AuthProvider from "./hooks/useAuth";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  );
}
