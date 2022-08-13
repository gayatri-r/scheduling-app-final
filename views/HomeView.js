import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../stylesheet";
import { useAuth } from "../providers/AuthProvider";

export function HomeView({ navigation }) {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');

    const Separator = () => <View style={styles.separator} />;

      return (
        <View style={styles.regular}>
            <Pressable
              style={styles.fillButton}
              onPress={() => {
                navigation.navigate("Clock In");
              }}>
              <Text style={styles.text2}>CLOCK IN</Text>
            </Pressable>

            <Separator />

            <Pressable
              style={styles.fillButton}
              onPress={() => {
                navigation.navigate("Clock Out");
              }}>
              <Text style={styles.text2}>CLOCK OUT</Text>
            </Pressable>

          <Separator />

          <Pressable
            style={styles.fillButton}
            onPress={() => {
              navigation.navigate("Mark Absence")
            }}>
            <Text style={styles.text2}>MARK ABSENCE</Text>
          </Pressable>

          <Separator />

          <Pressable
            style={styles.fillButton}
            onPress={() => {
              navigation.navigate("Show Stats")
            }}>
            <Text style={styles.text2}>SHOW STATS</Text>
          </Pressable>
        </View>
      );
}