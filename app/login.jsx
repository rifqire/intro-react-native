import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native"
import React, { useState } from "react"
import useAuth from "../context/auth/UseAuth"
import RoundedOutlineButton from "../components/RoundedOutlineButton"
import RoundedButton from "../components/RoundedButton"
import RoundedTextBox from "../components/RoundedTextBox"
import { router } from "expo-router"
import COLORS from "../constants/colors"

// Login == Login
const Login = () => {
  // Initialize email & password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // Initialize login object
  const { login } = useAuth()

  const handleLogin = () => {
    // Use authentication for login
    const userData = { email, password }
    if (email === "" && password === "") {
      Alert.alert("Please fill in all fields!")
    } else {
      login(userData)
      router.replace("(tabs)")
    }
  }

  return (
    <ImageBackground
      source={require("../assets/bg.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/fb.png")}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
            marginBottom: 30,
          }}
        />
        <RoundedTextBox
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          secureTextEntry={false}
        />
        <RoundedTextBox
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry={true}
        />
        <RoundedButton title="Login" onPress={handleLogin} />
        <RoundedOutlineButton
          title="Register"
          onPress={() => {
            router.replace("register")
          }}
        />
        <Text style={styles.text}>Forgot password?</Text>
      </View>
    </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: "Roboto_500Medium",
    letterSpacing: 0.25,
    color: COLORS.black,
    textAlign: "center",
  },
})
