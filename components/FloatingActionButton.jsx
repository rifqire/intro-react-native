import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const FloatingActionButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={onPress}
    >
      <Ionicons name="chatbubbles" size={24} color={COLORS.white} />
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
    top: 620,
    right: 30,
    height: 70,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
    borderRadius: 100,
  },
});
