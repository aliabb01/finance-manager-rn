import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BaseCardElement({ data }) {
    return (data &&  (
        <View>
            {data.map((item) => (

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
                            <Text style={{ textAlign: 'center' }}>{parseFloat(item.money).toFixed(2)} $</Text>
                        </View>
                    </View>
                </View>
                
            ))}
        </View>
    ))
}

const styles = StyleSheet.create({
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

    flex: 1.5,

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

    flex: 0.5,
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

    flex: 1,

    padding: 5
    
  },
})