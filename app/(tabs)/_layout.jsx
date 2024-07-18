import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import COLORS from "../../constants/colors"

const TabLayout = () => {
  function getTabBarIcon(routeName, { color, focused, size }) {
    let name
    switch (routeName) {
      case "index":
        name = focused ? "home" : "home-outline"
        break
      case "groups":
        name = focused ? "people" : "people-outline"
        break
      case "profile":
        name = focused ? "person-circle" : "person-circle-outline"
        break
      default:
        name = "home-outline"
        break
    }
    return <Ionicons name={name} size={size} color={color} />
  }
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        animation: "none",
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.black,
        tabBarIcon: (opt) => getTabBarIcon(route.name, opt),
      })}
    >
      <Tabs.Screen
        name="index"
        options={{ headerShown: true, animation: "none" }}
      />
      <Tabs.Screen
        name="groups"
        options={{ headerShown: true, animation: "none" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: true, animation: "none" }}
      />
    </Tabs>
  )
}

export default TabLayout
