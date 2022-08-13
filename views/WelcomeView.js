import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";

export function WelcomeView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  const Separator = () => <View style={styles.separator} />;

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Home");
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Press sign in");
    try {
      await signIn(email, password);
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressCreateUser = async () => {
    try {
      navigation.navigate("Sign Up");
    } catch (error) {
      Alert.alert(`Failed to sign up: ${error.message}`);
    }
  };

  return (
      <View style={styles.regular}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
        />
        <Separator />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <Separator />
        <Pressable style={styles.fillButton}
        onPress={onPressSignIn}>
          <Text style={styles.text2}>SIGN IN</Text>
        </Pressable>
        <Separator />
        <Pressable style={styles.fillButton}
        onPress={onPressCreateUser}>
          <Text style={styles.text2}>CREATE USER</Text>
        </Pressable>
      </View>
  );
}