import { StyleSheet, Text, View } from "react-native"
import React from "react"
import RoundedButton from "../../shared/components/RoundedButton"
import useAuth from "../../context/auth/UseAuth"
import MyProfileCard from "../../shared/components/MyProfileCard"

const Profile = () => {
  const { user, logout, isLoggedIn } = useAuth()

  return (
    <View style={styles.container}>
      <MyProfileCard
        email={user ? user.email : "Guest"}
        status={isLoggedIn ? "You are logged in" : "You are logged out"}
      />
      <RoundedButton title="Logout" onPress={logout} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
})
