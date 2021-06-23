import React, { useState } from 'react'
import { StyleSheet, Text, View, Switch, Button } from 'react-native';

function Settings() {
    const[darkMode, setDarkMode] = useState(false);
    const toggleSwitch = () => setDarkMode(!darkMode);    

    return (
        <View style={[styles.settingsLabelContainer, darkMode ? styles.darkStyle : '']}>
            <Text style={styles.settingsLabel}>Settings page</Text>

            <View style={styles.settingsContainer}>
                <Text>Dark mode</Text>

                <Switch
                    trackColor={{ false: '#767577', true: 'red' }}
                    thumbColor={ darkMode ? '#f5dd4b' : '#f4f3f4' }
                    onValueChange={toggleSwitch}
                    value={darkMode}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    settingsLabelContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 45,
    },
    settingsLabel: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    settingsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        // borderStyle: 'solid'
    }
});

export default Settings
