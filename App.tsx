import React, { useState } from "react";
import { ScrollView, Button, View } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import AddUserScreen from "./src/screens/AddUserScreen";
import UserListScreen from "./src/screens/UserListScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  // 🔐 If NOT logged in → show login screen
  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  // ✅ After login
  return (
    <ScrollView>
      {/* Add User */}
      <AddUserScreen />

      {/* Show / Hide Users Button */}
      <View style={{ margin: 20 }}>
        <Button
          title={showUsers ? "Hide Users" : "Show Users"}
          onPress={() => setShowUsers(!showUsers)}
        />
      </View>

      {/* User List */}
      {showUsers && <UserListScreen />}
    </ScrollView>
  );
}
