import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

import AddButton from "../components/AddButton";

function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" hidden={true} />
            
            <Text
                style={styles.brand}
            >
                Finance Manager            
            </Text>            

            <Animatable.Text                
                animation='fadeInUp'
                delay={2000}
            >
                Control your finance with ease
            </Animatable.Text>

            <AddButton />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingTop: 45,
      paddingBottom: 15,
  
    //   borderWidth: 1,
    //   borderColor: "blue",
    //   borderStyle: "solid",
    },
    brand: {
    //   borderWidth: 1,
    //   borderColor: "black",
    //   borderStyle: "solid",
  
      color: "#6C8EEF",
  
      fontWeight: 'bold',
      // fontFamily: "OpenSans_400Regular",
      fontSize: 27,
    },
  });
  

export default Home
