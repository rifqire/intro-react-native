import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const RoundedTextBox = ({placeholder, value, onChangeText, keyboardType, secureTextEntry}) => {
  return <View>
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
      />
  </View>;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 70,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 10,
  },
});

export default RoundedTextBox;
