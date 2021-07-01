import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function Statistics() {
    return (
        <View style={styles.statsLabelContainer}>
            <Text style={styles.statsLabel}>Statistics:</Text>

            <View style={styles.statsContainer}>
                <Text>Coming soon...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statsLabelContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 45,
    },
    statsLabel: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    statsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'black',
        // borderStyle: 'solid'
    }
});

export default Statistics
