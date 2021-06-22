import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

import { useFonts, SourceSansPro_700Bold_Italic } from "@expo-google-fonts/dev";

import { LinearGradient } from "expo-linear-gradient";

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
          <Text style={styles.cardHeadingText}>{heading} {showDate && <Text>({(new Date().toISOString().slice(0, 10))})</Text>}</Text>
        </View>

        <LinearGradient
          // colors={type === 1 && ["#61dbfb", "#6c8eef"]}
          colors={type === 1 && ["#A5D5FE", "#A5D5FE"]}
          style={styles.card}
        >
            <View style={styles.expBox}>
                {body.map((item) => (
                <View key={item.id} style={styles.singleExpView}>
                    {/* • {item.title}: {item.money}$ */}

                    <View style={styles.singleExpElem}>
                        <View style={styles.elementTitleView}>
                            <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                        </View>
                        <View style={styles.elementLine}>
                            <Text style={styles.elementLineText}></Text>
                        </View>
                        <View style={styles.elementMoney}>
                            <Text style={{ textAlign: 'center' }}>{item.money} $</Text>
                        </View>
                    </View>
                </View>
                ))}

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
  singleExpView: {
    padding: 10,

    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',

    // UNCOMMENT BELOW TO SEE EACH singleExpenditure borders
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
  },
  singleExpElem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

    
  },
  elementTitleView:{
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'cyan',

    flex: 1,

    padding: 5
  },
  elementLine: {
    // borderColor: '#F05340',
    // borderWidth: 2,
    // borderStyle: 'solid',
    
    // borderTopRightRadius: 25,
    // borderBottomRightRadius: 25,

    borderLeftWidth: 0,
    borderRightWidth: 0,
    
    backgroundColor: '#F05340',
    height: 2,
    // paddingVertical: 1,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  elementLineText: {
      
  },
  elementMoney: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'dashed',
    borderRadius: 30,
    backgroundColor: 'cyan',

    flex: 0.5,

    padding: 5
    
  },
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
