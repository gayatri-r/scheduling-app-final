import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../stylesheet";

export function ClockOutView({ navigation }) {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');
    let todayYear = 1;

    return(
        <View style={styles.regular}>
            <View style={styles.fixToText}>

                <TextInput
                    style={styles.dateInput}
                    placeholder = {"YYYY"}
                    value = {year}
                    onChangeText = {(input) => setYear(input)}
                />

                <Text style={styles.larger}>  /  </Text>

                <TextInput
                    style={styles.dateInput}
                    placeholder = {"MM"}
                    value = {month}
                    onChangeText = {(input) => setMonth(input)}
                />

                <Text style={styles.larger}>  /  </Text>

                <TextInput
                    style={styles.dateInput}
                    placeholder = {"DD"}
                    value = {day}
                    onChangeText = {(input) => setDay(input)}
                />
            </View>

            <View style={styles.separator} />

            <View style={styles.fixToText}>
                <TextInput
                    style={styles.dateInput}
                    placeholder = {"Hour"}
                    value = {hours}
                    onChangeText = {(input) => setHours(input)}
                />

                <Text style={styles.larger}>  :  </Text>

                <TextInput
                    style={styles.dateInput}
                    placeholder = {"Minute"}
                    value = {minutes}
                    onChangeText = {(input) => setMinutes(input)}
                />
            </View>

            <View style={styles.separator} />

            <Pressable
                style={styles.fillButton}
                onPress={() => {
                    //SUBMIT DATA TO DATABASE
                    navigation.navigate("Home")
                }}>
                <Text style={styles.text2}>SUBMIT</Text>
            </Pressable>
        </View>
    );
};