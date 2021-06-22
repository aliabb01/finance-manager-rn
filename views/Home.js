import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';

import BaseCard from '../components/BaseCard';
import AddButton from "../components/AddButton";

function Home() {
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
            title: 'Shopping',
            money: 50
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
                        animation='fadeInUp'
                        delay={2000}
                    >
                        Control your finance with ease
                    </Animatable.Text>
                </View>

                <View style={styles.content}>
                    <BaseCard 
                        type={1} 
                        heading={'Daily expenditures:'} 
                        body={dailyExp} 
                    />

                    <BaseCard 
                        type={1} 
                        heading={'Monthly expenditures:'} 
                        body={monthlyExp} 
                    />
                </View>

            </ScrollView>

            <AddButton />
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
      
      alignItems: "center",
      paddingVertical: 40
  
    //   borderWidth: 1,
    //   borderColor: "blue",
    //   borderStyle: "solid",
    },
    brandName: {
    //   borderWidth: 1,
    //   borderColor: "black",
    //   borderStyle: "solid",
  
      color: "#6C8EEF",
  
      fontWeight: 'bold',
      // fontFamily: "OpenSans_400Regular",
      fontSize: 27,
    },
    brandView: {
        marginBottom: 25
    },
    content: {
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        alignSelf: 'stretch',
        // justifyContent: 'space-around',
        
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid'
    }
  });
  

export default Home
