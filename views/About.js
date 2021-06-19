import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function About() {
    return (
        <View style={styles.aboutLabelContainer}>
            <Text style={styles.aboutLabel}>About page</Text>

            <View style={styles.aboutContainer}>
                <Text>This app was build by Ali Abbasov</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutLabelContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 45,
    },
    aboutLabel: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    aboutContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        // borderStyle: 'solid'
    }
});

export default About
