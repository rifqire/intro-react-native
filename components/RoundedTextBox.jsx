import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import COLORS from "../constants/colors";

const RoundedTextBox = ({placeholder, value, onChangeText, keyboardType, secureTextEntry}) => {
  return <View>
    <TextInput
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
      />
  </View>;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderRadius: 10,
    borderWidth: 1,
    fontFamily: "Roboto_500Medium",
    height: 70,
    marginBottom: 20,
    paddingLeft: 15,
  },
});

export default RoundedTextBox;
