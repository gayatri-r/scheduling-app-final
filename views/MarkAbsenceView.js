import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../stylesheet";
import { RadioButton } from 'react-native-paper';

export function MarkAbsenceView({ navigation }) {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [value, setValue] = React.useState('first');
    const [absence, setAbsence] = React.useState('');

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

            <Text style={styles.normal}>Please check one:</Text>
            <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="Holiday" value="first" />
                <RadioButton.Item label="Optional Holiday" value="second" />
                <RadioButton.Item label="Sick Leave" value="third" />
                <RadioButton.Item label="Casual Leave" value="fourth" />
                <RadioButton.Item label="Compensation" value="fifth" />
            </RadioButton.Group>

            <View style={styles.separator} />

            <Pressable
                style={styles.fillButton}
                onPress={() => {
                    switch (value) {
                        case "first":
                            setAbsence("Holiday");
                            navigation.navigate("Holiday");
                            break;
                        case "second":
                            setAbsence("Optional Holiday");
                            navigation.navigate("Holiday");
                            break;
                        case "third":
                            setAbsence("Sick Leave");
                            navigation.navigate("Home");
                            break;
                        case "fourth":
                            setAbsence("Casual Leave");
                            navigation.navigate("Home");
                            break;
                        case "fifth":
                            setAbsence("Compensation");
                            navigation.navigate("Compensation");
                            break;
                    }
                }}>
                <Text style={styles.text2}>SUBMIT</Text>
            </Pressable>
        </View>
    );
};