// components/LoginScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Image, ImageBackground } from "react-native";
import RoundedTextBox from "../../shared/components/RoundedTextBox";
import RoundedButton from "../../shared/components/RoundedButton";
import RoundedOutlineButton from "../../shared/components/RoundedOutlineButton";
import COLORS from "../../constants/colors";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "test@gmail.com" && password === "1111") {  
      navigation.navigate("Tabs");
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
        <RoundedOutlineButton title="Register" onPress={() => {navigation.navigate("Signup")}} />
        <Text style={styles.text}>Forgot password?</Text>
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
    color: COLORS.black,
    textAlign: "center",
  },
});

export default LoginScreen;
