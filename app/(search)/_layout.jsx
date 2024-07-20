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
            <Text style={{ fontFamily: "Roboto_500Medium", fontSize: 18 }}>Search Accounts</Text>
          ),
        }}
      />
    </Stack>
  )
}

export default SearchLayout
