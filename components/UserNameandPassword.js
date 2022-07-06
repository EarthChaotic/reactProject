import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassword = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const showData = () => {
    alert("Email: "+userName+"\nPassword: "+Password);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={userName}
        onChangeText={(userName) => {
          setUserName(userName);
        }}
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        value={Password}
        onChangeText={(Password) => {
          setPassword(Password);
        }}
        style={styles.input}
        placeholder="Password"
      />
      <Button
        title="Submit"
        style={styles.submitButton}
        color="#7a42f4"
        onPress={showData}
      />
    </View>
  );
};

export default UserNameandPassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
    textAlign: "center",
  },
  submitButton: {
    padding: 10,
    margin: 15,
    height: 40,
    textAlign: "center",
  },
  submitButtontext: {
    color: "white",
  },
});
