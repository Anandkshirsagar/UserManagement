import React, { useState } from "react";
import { ScrollView, Button, View } from "react-native";
import AddUserScreen from "./src/screens/AddUserScreen";
import UserListScreen from "./src/screens/UserListScreen";

export default function App() {
  const [showUsers, setShowUsers] = useState(false);

  return (
    <ScrollView>
      {/* Add User Form */}
      <AddUserScreen />

      {/* Button below Add User */}
      <View style={{ margin: 20 }}>
        <Button
          title={showUsers ? "Hide Users" : "Show Users"}
          onPress={() => setShowUsers(!showUsers)}
        />
      </View>

      {/* User List (only when button clicked) */}
      {showUsers && <UserListScreen />}
    </ScrollView>
  );
}
