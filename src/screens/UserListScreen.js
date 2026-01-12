import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { getUsers, deleteUser } from "../services/api";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers(); // refresh list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#ffffff", // 👈 white
  },
  userCard: {
    backgroundColor: "#2c2c2c", // dark background
    borderRadius: 8,
    padding: 14,
    marginBottom: 14,
  },
  text: {
    fontSize: 17,      // 👈 font bigger
    fontWeight: "bold",// 👈 bold text
    color: "#ffffff",  // 👈 white text
    marginBottom: 6,
  },
  deleteBtn: {
    marginTop: 10,
    alignSelf: "flex-start",
  },
});
