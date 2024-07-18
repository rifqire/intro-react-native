import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const GroupProfileCard = ({ empName, empPosition, empEmail }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{empName}</Text>
      <Text style={styles.subtitle}>{empPosition}</Text>
      <Text style={styles.subtitle}>{empEmail}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Edit" onPress={() => alert('Button 1 pressed')} />
        <Button title="Delete" onPress={() => alert('Button 2 pressed')} />
      </View>
    </View>
  );
};

export default GroupProfileCard;

const styles = StyleSheet.create({
  item: {
    backgroundColor: COLORS.white,
    elevation: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.gray,
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "start",
    gap: 10
  },
});
