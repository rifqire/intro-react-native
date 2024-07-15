// App.js
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './navigation/Navigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}