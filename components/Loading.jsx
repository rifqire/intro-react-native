import { StyleSheet, } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"

const Loading = () => {
  return (
    <LottieView
      autoPlay
      loop
      style={styles.lottieContainer}
      source={require("../assets/loading.json")}
    />
  )
}

export default Loading

const styles = StyleSheet.create({
  lottieContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 200,
    height: 200,
  },
})
