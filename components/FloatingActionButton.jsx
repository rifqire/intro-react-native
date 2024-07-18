import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress}
    >
      <Text style={{ color: "white" }}>Add</Text>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    borderWidth: 1,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    top: 640,
    right: 30,
    height: 70,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderRadius: 100,
  },
});
