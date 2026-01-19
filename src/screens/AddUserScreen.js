import React, { useState } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { addUser } from "../services/api";

export default function AddUserScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) {
      Alert.alert("Error", "Please enter name and email");
      return;
    }

    try {
      await addUser({ name, email });

      Alert.alert("Success", "User added successfully");

      setName("");
      setEmail("");
    } catch (err) {
      console.log("ADD USER SCREEN ERROR:", err);
      Alert.alert("Error", "User not added");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Enter Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Add User" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
});
