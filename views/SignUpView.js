import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";
import styles from "../stylesheet";

export function SignUpView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const { user, signUp, signIn } = useAuth();

  const onPressSignUp = async () => {
      try {
        await signUp(email, password);
        signIn(email, password);
      } catch (error) {
        Alert.alert(`Failed to sign up: ${error.message}`);
      }
    };

    return(
        <View style={styles.regular}>
            <TextInput
              onChangeText={setFullName}
              value={fullName}
              placeholder="Full Name"
              style={styles.input}
              autoCapitalize="words"
            />

            <View style={styles.separator} />

            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              style={styles.input}
              autoCapitalize="none"
            />

            <View style={styles.separator} />

            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />

            <View style={styles.separator} />

            <Pressable
                style={styles.fillButton}
                onPress={() => {
                    onPressSignUp
                }}>
                <Text style={styles.text2}>SIGN UP</Text>
            </Pressable>
        </View>
    );
}