import { StyleSheet, Text, View } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"
import COLORS from "../constants/colors"

const Error = ({ errorMsg }) => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.lottieContainer}
        source={require("../assets/error.json")}
      />
      <Text style={styles.text}>
        Uh oh! Something actually went wrong, but we're working on it.
      </Text>
      <Text style={styles.message}>Error: {errorMsg}</Text>
    </View>
  )
}

export default Error

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieContainer: {
    width: 300,
    height: 300,
  },
  text: {
    marginHorizontal: 20,
    marginTop: -25,
    marginBottom: 20,
    color: COLORS.gray,
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
  message: {
    marginHorizontal: 20,
    color: COLORS.gray,
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
    textAlign: "center",
  },
})
