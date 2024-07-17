import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RoundedButton from "../../shared/components/RoundedButton";
import useAuth from "../../context/auth/UseAuth";
import MyAppBar from "../../shared/components/MyAppBar";

const Profile = () => {
  const { user, logout, isLoggedIn } = useAuth();

  return (
    <View>
      <MyAppBar title="Profile" />
      <Text>Welcome, {user ? user.email : "Guest"}!</Text>
      <Text>{isLoggedIn ? "You are logged in" : "You are logged out"}</Text>
      <RoundedButton title="Logout" onPress={logout} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
