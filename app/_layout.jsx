import { Stack } from "expo-router"
import { AuthProvider } from "../context/auth/AuthContext"
import { Provider } from "react-redux"
import {store} from "../redux/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false, animation: "none" }}>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen
            name="register"
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen
            name="index"
            options={{ headerShown: false, animation: "none" }}
          />
        </Stack>
      </AuthProvider>
    </Provider>
  )
}

export default RootLayout
