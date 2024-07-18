import React from "react"
import { Stack } from "expo-router"

const GroupsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen
        name="add_member"
        options={{ headerShown: true, animation: "none" }}
      />
    </Stack>
  )
}

export default GroupsLayout
