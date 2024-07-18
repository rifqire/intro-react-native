import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import COLORS from "../constants/colors";

const RoundedButton = ({ title, onPress }) => {
  return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    elevation: 3,
    height: 60,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.25,
    lineHeight: 21,
  }
});

export default RoundedButton;
