import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { getUsers, deleteUser } from "../services/api";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("LOAD USERS ERROR:", err);
      setUsers([]);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers(); // refresh list
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User List</Text>

      {users.length === 0 && (
        <Text style={styles.noUser}>No users found</Text>
      )}

      {users.map((user) => (
        <View key={user.id} style={styles.userCard}>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>

          <View style={styles.deleteBtn}>
            <Button
              title="Delete"
              color="red"
              onPress={() => handleDelete(user.id)}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ffffff",
  },
  noUser: {
    color: "#ccc",
    fontSize: 16,
    marginTop: 20,
  },
  userCard: {
    backgroundColor: "#2c2c2c",
    borderRadius: 8,
    padding: 14,
    marginBottom: 14,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 6,
  },
  deleteBtn: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
});
