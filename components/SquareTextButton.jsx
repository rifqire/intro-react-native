import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import COLORS from "../constants/colors"

const SquareTextButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.button}>{title}</Text>
    </Pressable>
  )
}

export default SquareTextButton

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    fontFamily: "Roboto_500Medium",
    justifyContent: "center",
    marginBottom: 10,
    padding: 10,
    textAlign: "center",
  },
})
