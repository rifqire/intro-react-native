// components/LoginScreen.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert, Image, ImageBackground } from "react-native";
import RoundedTextBox from "../../shared/components/RoundedTextBox";
import RoundedButton from "../../shared/components/RoundedButton";
import RoundedOutlineButton from "../../shared/components/RoundedOutlineButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@example.com" && password === "password") {
      Alert.alert("Login Successful");
    } else {
      Alert.alert("Login Failed", "Invalid credentials");
    }
  };

  return (
    <ImageBackground source={require("../../assets/bg.png")} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("../../assets/fb.png")} style={{ width: 90, height: 90, alignSelf: "center", marginBottom: 30 }} />
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
        <Text style={styles.text}>Forgot password?</Text>
        <RoundedOutlineButton title="Register" onPress={() => {}} />
      </View>
    </ImageBackground>
  );
};

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
    fontWeight: "semibold",
    letterSpacing: 0.25,
    color: "black",
    textAlign: "center",
  },
});

export default LoginScreen;
