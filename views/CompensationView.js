import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../stylesheet";
import { RadioButton } from 'react-native-paper';

//GET DATE FROM PREV SCREEN (mark absence)

export function CompensationView({ navigation }) {
    const [notes, setNotes] = useState('');

    return(
        <View style={styles.regular}>
            <Text style={styles.normal}>Please list the time range being missed as well as the date and time range when you will compensate this:</Text>

            <TextInput
                multiline
                numberOfLines = {7}
                style={styles.input}
                onChangeText = {(input) => setNotes(input)}
            />

            <View style={styles.separator} />

            <Pressable
                style={styles.fillButton}
                onPress={() => {
                    //PUT IN DATABASE
                    navigation.navigate("Home")
                }}>
                <Text style={styles.text2}>SUBMIT</Text>
            </Pressable>
        </View>
    );
};