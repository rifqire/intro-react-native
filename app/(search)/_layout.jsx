import { View, Text } from "react-native"
import React from "react"
import { Stack } from "expo-router"

const SearchLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen
        name="search"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Search Accounts</Text>
          ),
        }}
      />
    </Stack>
  )
}

export default SearchLayout
