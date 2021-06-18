import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 10
  }
});
