import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../stylesheet";
import { RadioButton } from 'react-native-paper';

//GET DATE FROM PREV SCREEN (mark absence)

export function HolidayView({ navigation }) {
    const [holiday, setHoliday] = useState('');

    return(
        <View style={styles.regular}>
            <Text style={styles.normal}>Please specify holiday:</Text>

            <TextInput
                multiline
                numberOfLines = {2}
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