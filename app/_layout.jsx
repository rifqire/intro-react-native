import { Stack } from "expo-router"
import { AuthProvider } from "../context/auth/AuthContext"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  })

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

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
