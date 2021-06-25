import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

import { useFonts, SourceSansPro_700Bold_Italic } from "@expo-google-fonts/dev";

import { LinearGradient } from "expo-linear-gradient";

// import sum from '../helpers/sum'

import BaseCardElement from "./BaseCardElement";

export default function BaseCard({
  type,
  heading,
  body,
  showDate,
  roundedSumDaily,
  roundedSumMonthly,
  setDaily,
}) {
  let [fontsLoaded] = useFonts({
    SourceSansPro_700Bold_Italic,
  });

  // DELETE FROM DAY

  //   const deleteFromDay = (id) => {
  //     setDaily((prevDaily) => {
  //       return prevDaily.filter(daily => daily.id != id)
  //     });
  // }

  // body.map(item => item.money).reduce((prev, next) => prev + next)
  //   const totalSum = sum(body, "money");

  //   const totalSumRounded = parseFloat(totalSum).toFixed(2);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View>
        <View style={styles.cardHeading}>
          <Text style={styles.cardHeadingText}>
            {heading}{" "}
            {showDate && (
              <Text>({new Date().toDateString().slice(0, 10)})</Text>
            )}
          </Text>
        </View>

        <LinearGradient
          // colors={type === 1 && ["#61dbfb", "#6c8eef"]}
          // #A5D5FE
          colors={body == "" ? ["#E1E1E1", "#E1E1E1"] : ["#A5D5FE", "#A5D5FE"]}
          style={styles.card}
        >
          <View style={styles.expBox}>
            <BaseCardElement
              data={body}
              type={type}
              total={roundedSumMonthly}
              setDaily={setDaily}
            />

            {body != "" && (
              <Text style={styles.totalExp}>
                Total spent:{" "}
                <Text style={styles.totalSum}>
                  {type === 1 ? roundedSumDaily : roundedSumMonthly}$
                </Text>
              </Text>
            )}

            {type === 1 && body == "" && (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontStyle: "italic",
                  color: "darkgray",
                }}
              >
                No expenditures for today
              </Text>
            )}

            {type === 2 && body == "" && (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 16,
                  fontStyle: "italic",
                  color: "darkgray",
                }}
              >
                No expenditures for this month
              </Text>
            )}
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    marginHorizontal: 25,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,

    borderRadius: 10,
    // alignSelf: 'stretch'
  },
  cardHeading: {
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",

    marginBottom: 15,

    alignItems: "center",
  },
  cardHeadingText: {
    color: "black", //#E99D5D
    fontFamily: "SourceSansPro_700Bold_Italic",
    fontSize: 18,
  },

  //   expBox: {
  //     borderColor: "blue",
  //   },

  totalExp: {
    fontSize: 11,
    fontStyle: "italic",
    textAlign: "center",

    marginTop: 20,

    // borderColor: 'black',
    // borderWidth: 1,
    // borderStyle: 'solid'

    padding: 5,
    backgroundColor: "cyan",
    borderRadius: 25,
  },
  totalSum: {
    color: "green",
  },
});
