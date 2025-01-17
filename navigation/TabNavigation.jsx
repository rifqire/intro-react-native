import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import Home from "../screens/TabScreens/Home";
import Groups from "../screens/TabScreens/Groups";
import Profile from "../screens/TabScreens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import GroupFlatList from "../screens/Group/GroupFlatList";
import GroupSectionList from "../screens/Group/GroupSectionList";
import GroupScrollView from "../screens/Group/GroupScrollView";
import AddMember from "../screens/Group/AddMember";

// Initialize stack & tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function getTabBarIcon(route, { color, focused, size }) {
  let iconName;
  switch (route) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Groups":
      iconName = focused ? "people" : "people-outline";
      break;
    case "Profile":
      iconName = focused ? "person-circle" : "person-circle-outline";
      break;
    default:
      break;
  }
  return <Ionicons name={iconName} size={size} color={color} />;
}

function GroupStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="Lists" component={Groups} />
      <Stack.Screen name="FlatList" component={AddMemberStack} />
      <Stack.Screen name="SectionList" component={GroupSectionList} />
      <Stack.Screen name="ScrollView" component={GroupScrollView} />
    </Stack.Navigator>
  );
}

function AddMemberStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="ViewGroupMembers" component={GroupFlatList} />
      <Stack.Screen name="AddMember" component={AddMember} />
    </Stack.Navigator>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: (opt) => getTabBarIcon(route.name, opt),
          tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 5 },
        };
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Groups" component={GroupStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
