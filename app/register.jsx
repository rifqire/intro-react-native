import { Alert, Image, ImageBackground, StyleSheet, View } from "react-native"
import React, { useState } from "react"
import { router } from "expo-router"
import RoundedTextBox from "../components/RoundedTextBox"
import RoundedButton from "../components/RoundedButton"
import RoundedOutlineButton from "../components/RoundedOutlineButton"
import COLORS from "../constants/colors"

// Register == SignUp
const Register = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    if (fullName === "" && email === "" && password === "") {
      Alert.alert("Please fill in all fields!")
    } else {
      Alert.alert("Registered!")
      router.replace("login")
    }
  }
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }}>
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
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          keyboardType="default"
          secureTextEntry={false}
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
        <RoundedButton title="Register" onPress={handleRegister} />
        <RoundedOutlineButton
          title="I have an account"
          onPress={() => {
            router.replace("login")
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default Register

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
