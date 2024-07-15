import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Welcome from '../screens/Authentication/Welcome'
import Signup from '../screens/Authentication/Signup'
import Login from '../screens/Authentication/Login'
import Home from '../screens/TabScreens/Home'
import Groups from '../screens/TabScreens/Groups'
import Profile from '../screens/TabScreens/Profile'
import COLORS from '../constants/colors'

// Initialize stack & tab
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Stack navigation: welcome, signup, login, tabs
function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Tabs" component={TabNavigation}/>
    </Stack.Navigator>
  )
}

// Tab navigation: home, groups, profile
function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={({route}) => {
            return {
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.black,
                tabBarIcon: (opt) => getTabBarIcon(route.name, opt),
            }
        }}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Groups" component={Groups}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  )
}

// Bottom navbar icons selector
function getTabBarIcon(route, {color, focused, size}) {
    let iconName
    switch (route) {
        case "Home":
            iconName = focused ? "home" : "home-outline"
            break;
        case "Groups":
            iconName = focused ? "people" : "people-outline"
            break;
        case "Profile":
            iconName = focused ? "person-circle" : "person-circle-outline"
            break;
        default:
            break;
    }
    return <Ionicons name={iconName} size={size} color={color}/>
}

// Navigator function
export default function Navigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    </SafeAreaView>
  )
}