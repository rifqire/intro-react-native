import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

// Initialize auth context
const AuthContext = createContext();

// Initialize auth provider
const AuthProvider = ({ children }) => {
  // Initialize user and isLoggedIn states
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use the useEffect hook to check if the user is authenticated
  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }
    };
    loadUser();
  }, []);

  // Login function
  const login = async (user) => {
    setUser(user);
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
