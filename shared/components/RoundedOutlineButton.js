import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderColor: "#007AFF",
    borderWidth: 1,
    height: 60,
    backgroundColor: "transparent",
    marginBottom: 20,
    marginTop: 100
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#007AFF",
  }
});

export default RoundedOutlineButton;
