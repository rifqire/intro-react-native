import { StyleSheet, Text, View } from "react-native"
import React from "react"
import RoundedButton from "../components/RoundedButton"
import { router } from "expo-router"

// Index == Welcome
const Index = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <RoundedButton
        title="Let's Goooo"
        onPress={() => router.navigate("login")}
      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
