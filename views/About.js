import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Icon } from "react-native-elements";

import AboutChip from '../components/AboutChip';

function About() {
    return (
        <View style={styles.aboutLabelContainer}>
            <Text style={styles.aboutLabel}>About:</Text>

            <View style={styles.aboutContainer}>
                <Text style={{ marginBottom: 20, fontSize: 16 }}>This app was developed by Ali Abbasov</Text>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>Contact me by:</Text>
                    
                    <AboutChip icon='mail' iconColor='red' type='mail' />

                    <AboutChip icon='github' iconColor='black' type='github' />
                </View>


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
        alignItems: 'flex-start',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        // borderStyle: 'solid'
    }
});

export default About
