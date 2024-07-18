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
    backgroundColor: COLORS.lightGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
})
