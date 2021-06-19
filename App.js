import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AddButton from './components/AddButton'

// Fonts
import {
  useFonts,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Finance Manager App</Text>
      <StatusBar style="auto" hidden={true} />

      <AddButton />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange', 
    alignItems: 'center',
    paddingTop: 45,
    paddingBottom: 15,

    borderWidth: 1,
    borderColor: 'blue',
    borderStyle: 'solid',
  },
  brand: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',

    color: 'black',
    
    padding: 10,
    // fontFamily: "OpenSans_400Regular",
    fontSize: 22
  },
});
