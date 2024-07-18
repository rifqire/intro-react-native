import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import COLORS from "../../constants/colors"
import { Image, Text } from "react-native"

const TabLayout = () => {
  function getTabBarIcon(routeName, { color, focused, size }) {
    let name
    let label
    switch (routeName) {
      case "index":
        name = focused ? "home" : "home-outline"
        break
      case "explore":
        name = focused ? "search" : "search-outline"
        break
      case "post":
        name = focused ? "add-circle" : "add-circle-outline"
        break
      case "groups":
        name = focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
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
        tabBarShowLabel: false,
        headerShown: false,
        animation: "none",
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.black,
        tabBarIcon: (opt) => getTabBarIcon(route.name, opt),
        
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Image
              style={{ width: 100, height: 40 }}
              source={require("../../assets/header.png")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Explore
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Post
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Direct Messages
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: true,
          animation: "none",
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              My Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  )
}

export default TabLayout
