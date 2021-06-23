import React, { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/dev";

import BaseCard from '../components/BaseCard';
import AddButton from "../components/AddButton";

function Home() {
    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    });

    const dailyExp = [
        {
            id: 1,
            title: 'Bread',
            money: 0.60
        },
        {
            id: 2,
            title: 'Transport',
            money: 2
        },
        {
            id: 3,
            title: 'Jacket',
            money: 30
        },
        {
            id: 4,
            title: 'Shirt',
            money: 25
        },
        {
            id: 5,
            title: 'Pen',
            money: 0.2
        },
        {
            id: 6,
            title: 'Pen',
            money: 0.2
        },
        {
            id: 7,
            title: 'Pen',
            money: 0.2
        }
    ]

    const monthlyExp = [
        {
            id: 1,
            title: new Date().toDateString().slice(0, 10),
            money: 58.20
        },
        {
            id: 2,
            title: 'Rent',
            money: 200
        },
        {
            id: 3,
            title: 'Household',
            money: 100
        },
        {
            id: 4,
            title: 'Household',
            money: 100
        },
        {
            id: 5,
            title: 'Double Mop for house (sale)',
            money: 100
        }
    ]
    
    if(!fontsLoaded) {
        return <ActivityIndicator />;
    }
    else {
        return (
            <View>
                <ScrollView contentContainerStyle={styles.container}>
                    <StatusBar style="auto" hidden={true} />
                    
                    <View style={styles.brandView}>
                        <Text
                            style={styles.brandName}
                        >
                            Finance Manager            
                        </Text>           
    
                        <Animatable.Text                
                            animation='fadeInRight'
                            delay={2000}
                            style={styles.brandMotto}
                        >
                            Control your finance with ease
                        </Animatable.Text>
                    </View>
    
                    <View style={styles.content}>
                        <BaseCard 
                            type={1} 
                            heading={'Daily expenditures:'} 
                            body={dailyExp}
                            showDate={true} 
                        />
    
                        <BaseCard 
                            type={1} 
                            heading={'Monthly expenditures:'} 
                            body={monthlyExp} 
                            monthly={true}
                        />
                    </View>
    
                </ScrollView>
    
                <AddButton currentDaily={dailyExp} />
            </View>     
        )
    }
}

const styles = StyleSheet.create({
    container: {
      
      alignItems: "center",
      paddingVertical: 40
  
    //   borderWidth: 1,
    //   borderColor: "blue",
    //   borderStyle: "solid",
    },
    brandView: {
        marginBottom: 25
    },
    brandName: {
    //   borderWidth: 1,
    //   borderColor: "black",
    //   borderStyle: "solid",
  
      color: "#6C8EEF",
  
      // fontWeight becomes problematic when assigning google font
      // fontWeight: 'bold',

      fontFamily: "Nunito_700Bold",
      fontSize: 27,
    },
    brandMotto: {
        fontFamily: "Nunito_400Regular",
    },
    content: {
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        alignSelf: 'stretch',
        // justifyContent: 'space-around',
        
        // borderColor: 'black',
        // borderWidth: 1,
        // borderStyle: 'solid'
    }
  });
  

export default Home
