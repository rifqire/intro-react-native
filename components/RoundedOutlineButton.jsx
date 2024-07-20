import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/colors";

const RoundedOutlineButton = ({ title, onPress }) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderColor: COLORS.primary,
    borderRadius: 30,
    borderWidth: 1,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  text: {
    color: COLORS.primary,
    fontSize: 16,
    letterSpacing: 0.25,
    lineHeight: 21,
    fontFamily: "Roboto_500Medium",
  }
});

export default RoundedOutlineButton;
