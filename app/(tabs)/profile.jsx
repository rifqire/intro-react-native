import { StyleSheet, View } from "react-native"
import React from "react"
import MyProfileCard from "../../components/MyProfileCard"
import RoundedButton from "../../components/RoundedButton"
import useAuth from "../../context/auth/UseAuth"
import { router } from "expo-router"

// Profile == Profile
const Profile = () => {
  const { user, logout, isLoggedIn } = useAuth()

  const handleLogOut = () => {
    logout()
    router.replace("login")
  }

  return (
    <View style={styles.container}>
      <MyProfileCard
        email={user ? user.email : "Guest"}
        status={isLoggedIn ? "You are logged in" : "You are logged out"}
      />
      <RoundedButton title="Logout" onPress={handleLogOut} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
})
