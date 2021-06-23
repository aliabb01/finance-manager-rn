import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

import { useFonts, SourceSansPro_700Bold_Italic } from "@expo-google-fonts/dev";

import { LinearGradient } from "expo-linear-gradient";

import BaseCardElement from "./BaseCardElement";

export default function BaseCard({ type, heading, body, showDate }) {
  let [fontsLoaded] = useFonts({
    SourceSansPro_700Bold_Italic,
  });

  const sum = (items, prop) => {
    return items.reduce((a, b) => {
      return a + b[prop];
    }, 0);
  };

  const totalSum = sum(body, "money");

  const totalSumRounded = parseFloat(totalSum).toFixed(2);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View>
        <View style={styles.cardHeading}>
          <Text style={styles.cardHeadingText}>{heading} {showDate && <Text>({(new Date().toDateString().slice(0, 10))})</Text>}</Text>
        </View>

        <LinearGradient
          // colors={type === 1 && ["#61dbfb", "#6c8eef"]}
          colors={type === 1 && ["#A5D5FE", "#A5D5FE"]}
          style={styles.card}
        >
            <View style={styles.expBox}>
                
                <BaseCardElement data={body} />

                <Text style={styles.totalExp}>
                    Total spent:{" "}
                    <Text style={styles.totalSum}>{totalSumRounded}$</Text>
                </Text>
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
