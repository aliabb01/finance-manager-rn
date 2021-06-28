import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Button, ActivityIndicator, RefreshControl } from 'react-native';
import { NativeModules } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/dev";

import sum from '../helpers/sum'
import unique from '../helpers/unique'

import BaseCard from '../components/BaseCard';
import AddButton from "../components/AddButton";

function Home() {

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
    })

    const [dailyExp, setDailyExp] = useState(
        [
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
            }
        ]
    )

    

    const [monthlyExp, setMonthlyExp] = useState([
        // {
        //     id: 1,
        //     title: new Date().toDateString().slice(0, 10),
        //     money: 58.20
        // },
        // {
        //     id: 2,
        //     title: 'Rent',
        //     money: 200
        // },
        // {
        //     id: 3,
        //     title: 'Household',
        //     money: 100
        // },
        // {
        //     id: 4,
        //     title: 'Household',
        //     money: 100
        // },
        // {
        //     id: 5,
        //     title: 'Double Mop for house (sale)',
        //     money: 100
        // }
    ])

    const totalSumDaily = sum(dailyExp, "money");
    const totalSumDailyRounded = parseFloat(totalSumDaily).toFixed(2);

    const [totalSumMonthly, setTotalSumMonthly] = useState(sum(monthlyExp, "money"));
    const [totalSumMonthlyRounded, setTotalSumMonthlyRounded] = useState(parseFloat(totalSumMonthly).toFixed(2));

    const [monthlyId, setMonthlyId] = useState(0)

    const monthlySingle = {
        id: monthlyId,
        title: new Date().toDateString().slice(0, 10),
        money: totalSumDailyRounded
    }

    // PUSH TO MONTH

    // const pushToMonth = (sumM) => {
    //     setMonthlyExp([...monthlyExp, monthlySingle])  
    //     //parseFloat(sum(monthlyExp, "money")) + parseFloat(monthlySingle.money)    
    //     sumM = [...monthlyExp, monthlySingle].reduce((total, obj) => parseFloat(obj.money) + total, 0);

    //     setTotalSumMonthly(sumM)
    //     setTotalSumMonthlyRounded(parseFloat(sumM).toFixed(2))
        
    //     // console.log(sumM);

    //     // setTotalSumMonthly(sum(monthlyExp, "money") + monthlySingle.money)
    //     // setTotalSumMonthlyRounded(parseFloat(sum(monthlyExp, "money") + monthlySingle.money).toFixed(2))
    //     setMonthlyId(monthlyId+1)
    // }

    // PUSH TO DAY

    const [dailyId, setDailyId] = useState(dailyExp.length + 1)

    const dailySingle = {
        id: dailyId,
        title: "Paper",
        money: 0.3
    }

    // const [duplicateDaily, setDuplicateDaily] = useState(false)

    // const pushToDay = () => {
        

    //     dailyExp.some((daily) => {
    //         if(daily.title === dailySingle.title) {
    //             // console.log("yes");
    //             // dailyExp.filter((item) => {                
    //             //     if(item.title == dailySingle.title) {
    //             //         item.money += dailySingle.money
    //             //     }
    //             // })
                
    //             // setDuplicateDaily(true)
    //             // daily.money+=dailySingle.money

    //             const index = dailyExp.indexOf(daily)
    //             dailyExp.splice(index, 1)
    //             dailySingle.money+= daily.money

    //             setDailyExp([...dailyExp, dailySingle])
    //             setDailyId(dailyId+1)
    //         }
    //         else {
    //             setDailyExp([...dailyExp, dailySingle])
    //             setDailyId(dailyId+1)
    //         }
            
    //     })

    //     setDailyExp([...dailyExp, dailySingle])
    //     setDailyId(dailyId+1)

        
            

    //         // dailyFilteredExp.money+=dailySingle.money
        

        
            
        

        

    //     // console.log(dailyFilteredExp);

    //     // console.log(dailyExp.map((item) => item.title))
    // }

    

    //monthlyExp.push(monthlySingle)

    const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = useState(false)

    const [loading, setLoading] = useState(true)

    const closeSkeleton = () => {
        setTimeout(() => {
        setLoading(false)
        }, 2000)
    }    

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        wait(0).then(() => setRefreshing(false)).then(() => {
            // NativeModules.DevSettings.reload();
            setLoading(true)
            wait(2000).then(() => setLoading(false))
        })
        
    })

    useEffect(() => {
        closeSkeleton()
    }, [])
    
    if(!fontsLoaded) {
        return <ActivityIndicator />;
    }
    else {
        return (
            <View style={{ flex: 1 }}>                           

                <ScrollView contentContainerStyle={styles.container}
                    refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                          colors={['#6C8EEF']}
                          progressBackgroundColor={'#e1e1e1'}
                          size={1}
                        />
                    }
                >
                    
                    <StatusBar style="auto" hidden={true} />
                    
                    <View style={styles.brandView}>
                        <Text
                            style={styles.brandName}
                        >
                            Finance Manager            
                        </Text>

                        {/* <Button
                            title="Push to day"
                            onPress={() => pushToDay()}
                        ></Button>                                    */}

                        {/* <Button title="Hello" onPress={() => NativeModules.DevSettings.reload()} /> */}
    
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
                            roundedSumDaily={totalSumDailyRounded}
                            setDaily={setDailyExp}
                            loading={loading}                             
                        />
    
                        <BaseCard 
                            type={2} 
                            heading={'Monthly expenditures:'} 
                            body={monthlyExp} 
                            monthly={true}
                            roundedSumMonthly={totalSumMonthlyRounded}
                            loading={loading}   
                        />
                    </View>
    
                </ScrollView>
    
                <AddButton 
                    currentDaily={dailyExp}
                    dailyExpenditure={dailyExp}
                    dailySingleExpenditure={dailySingle}
                    setDailyExpenditure={setDailyExp}
                    dailyId={dailyId}
                    setDailyId={setDailyId}
                />
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
