// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./navigation/Navigator";
import { AuthProvider } from "./context/auth/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
