import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Authentication/Welcome";
import Signup from "../screens/Authentication/Signup";
import Login from "../screens/Authentication/Login";
import useAuth from "../context/auth/UseAuth";
import TabNavigation from "./TabNavigation";
import { Text } from "react-native";

// Initialize stack & tab
const Stack = createStackNavigator();

// Navigator function
export default function Navigator() {
  // Initialize user & loading
  const { user, loading, isLoggedIn } = useAuth();
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user && isLoggedIn ? (
            <Stack.Screen name="Tabs" component={TabNavigation} />
          ) : (
            <>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
