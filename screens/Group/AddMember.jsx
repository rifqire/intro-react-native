import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RoundedTextBox from "../../shared/components/RoundedTextBox";
import RoundedButton from "../../shared/components/RoundedButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/reducers/dataSlice";

const AddMember = ({ navigation }) => {
  // 4. Initialize the empty states of the input, as well as dispatch
  const dispatch = useDispatch();
  const [empName, setEmpName] = useState("");
  const [empPosition, setEmpPosition] = useState("");
  const [empEmail, setEmpEmail] = useState("");

  // 5. Create function to add profile to list, and trim the useless space
  const addProfile = () => {
    if (empName.trim() && empPosition.trim() && empEmail.trim()) {
      dispatch(addItem({empName, empPosition, empEmail}));
      setEmpName("");
      setEmpPosition("");
      setEmpEmail("");
      navigation.navigate("ViewGroupMembers");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add a member:</Text>
        <RoundedTextBox
          placeholder="Full Name"
          value={empName}
          onChangeText={setEmpName}
        />
        <RoundedTextBox
          placeholder="Current Role"
          value={empPosition}
          onChangeText={setEmpPosition}
        />
        <RoundedTextBox
          placeholder="Email Address"
          keyboardType={"email-address"}
          value={empEmail}
          onChangeText={setEmpEmail}
        />
        <RoundedButton title="Create Member" onPress={addProfile} />
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
