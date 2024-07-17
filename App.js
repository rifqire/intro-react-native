// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./navigation/Navigator";
import { AuthProvider } from "./context/auth/AuthContext";
import { Provider } from "react-redux";
import {store} from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigator />
        </SafeAreaProvider>
      </AuthProvider>
    </Provider>
  );
}
