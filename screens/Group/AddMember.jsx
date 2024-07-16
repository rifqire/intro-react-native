import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedTextBox from "../../shared/components/RoundedTextBox";
import RoundedButton from "../../shared/components/RoundedButton";

const AddMember = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add a member:</Text>
        <RoundedTextBox placeholder="Full Name" />
        <RoundedTextBox placeholder="Current Role" />
        <RoundedTextBox
          placeholder="Email Address"
          keyboardType={"email-address"}
        />
        <RoundedButton
          title="Create Member"
          onPress={() => {
            navigation.pop();
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default AddMember;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
