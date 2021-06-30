import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, FlatList } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { Icon } from 'react-native-elements'

import unique from '../helpers/unique'

import EditModal from './EditModal'

const RightDeleteAction = ({progress, dragX, setDailyExp, itemId, moveAnim}) => {
    const scale = dragX.interpolate({
        inputRange: [-50, 0],
        outputRange: [1.0, 0],
        extrapolate: 'clamp'
    });

    const deleteFromDay = (id) => {
        // moveAnim()
        setDailyExp((prevDaily) => {
          return prevDaily.filter(daily => daily.id != id)
        });        
    }

    return (
        // style={{ flex: 1 }}
        
            <View style={{ justifyContent: 'center', flex: 0.3 }}>
                <TouchableOpacity style={styles.rightDelete} onPress={() => deleteFromDay(itemId)}>
                    
                    <Animated.View style={[styles.rightDeleteText, { transform: [{ scale }]}]}>
                        <Icon 
                            name="delete"
                            type="antdesign"
                            color="white"
                        />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        
        
    )
}

const LeftEditAction = ({ progress, dragX, setDailyExp, itemId, d }) => {
    const scale = dragX.interpolate({
        inputRange: [0, 50],
        outputRange: [0, 1.0],
        extrapolate: 'clamp'
    });

    // const [pr, setPr] = useState(progress)

    // useEffect(() => {
    //     setPr(progress)
    // })

    const [editModalVisibility, setEditModalVisibility] = useState(false)

    const editDaily = (id) => {
        return d.filter(daily => daily.id == id)
    } 

    // const deleteFromDay = (id) => {
    //     setDailyExp((prevDaily) => {
    //       return prevDaily.filter(daily => daily.id != id)
    //     });
    // }

    // const [editElem, setEditElem] = useState(editDaily(itemId))       

    const handleLeftEditClick = () => {
        setEditModalVisibility(!editModalVisibility)
        // setEditElem(editDaily(itemId))
    }

    // useEffect(() => {
        
    // }, [])

    return (
        
            <View style={{ justifyContent: 'center', flex: 0.3 }}>
                <TouchableOpacity style={styles.leftEdit} onPress={() => handleLeftEditClick()}>
                    
                    <Animated.View style={[styles.leftEditText, { transform: [{ scale }]}]}>
                        <Icon 
                            name="edit"
                            type="antdesign"
                            color="white"
                        />
                    </Animated.View>
                </TouchableOpacity>

                <EditModal 
                    visibility={editModalVisibility}
                    setVisibility={setEditModalVisibility}
                    editEl={editDaily(itemId)}
                    setDExp={setDailyExp}
                    ID={itemId}
                    dailyData={d}
                />                
            </View>
        
    )
}

export default function BaseCardElement({ data, type, total, setDaily }) {
    
    const moveLeft = useState(new Animated.Value(0))[0]

    function moveElem() {
        Animated.timing(moveLeft, {
            toValue: 500,
            duration: 1500,
            useNativeDriver: true
        }).start()
    }
    
    return (data &&  (
        <View>
            
                {data.map((item) => (

                    type==1 && (
                        
                        // <Animated.View style={[
                        //     {
                        //         transform: [
                        //             {
                        //                 translateX: moveLeft
                        //             }
                        //         ],
                        //     }
                        //     ]}>
                        
                            <View key={item.id} style={styles.singleExpView}>
                                {/* • {item.title}: {item.money}$ */}

                                <Swipeable                
                                    renderRightActions={(progress, dragX, setD, itemId, moveAnim) => <RightDeleteAction progress={progress} dragX={dragX} setDailyExp={setDaily} itemId={item.id} moveAnim={moveElem} />}
                                    renderLeftActions={(progress, dragX, setD, itemId, d) => <LeftEditAction progress={progress} dragX={dragX} setDailyExp={setDaily} itemId={item.id} d={data} />}
                                    // onSwipeableRightOpen={() => deleteDaily(item.id)}
                                    // onActivated={() => addBorder()}
                                    friction={1.5}
                                >

                                    
                                        <View style={styles.singleExpElem}>
                                            <View style={styles.elementTitleView}>
                                            {/* 
                                                {data.indexOf(item) + 1}: 
                                                ({item.id})
                                            */}
                                                <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                                            </View>
                                            <View style={styles.elementLine}>
                                                <Text style={styles.elementLineText}></Text>
                                            </View>
                                            <View style={styles.elementMoney}>
                                                <Text style={{ textAlign: 'center' }}>{parseFloat(item.money).toFixed(2)} $</Text>
                                            </View>

                                            {/* <View >
                                                <TouchableOpacity 
                                                    // style={styles.elementRemoveText}
                                                >
                                                </TouchableOpacity>
                                            </View>                     */}
                                        </View>
                                    
                                </Swipeable>

                            </View>
                        // </Animated.View>
                    )
                    
                ))}
            

            {type==2 && (
                unique(data, "title").map((item) => (
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
                                <Text style={{ textAlign: 'center' }}>{parseFloat(total).toFixed(2)} $</Text>
                            </View>
                        </View>
                    </View>
                ))
            )}
        </View>
    ))
}

const styles = StyleSheet.create({
  singleExpView: {
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
    alignItems: 'center',
    padding: 10,

    // elevation: 15,
    
    backgroundColor: '#A5D5FE'

    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",

    
  },
  elementTitleView:{
    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: 'cyan',

    flex: 1.5,

    padding: 5,

    elevation: 3
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
    justifyContent: 'center',

    elevation: 0
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

    padding: 5,
    
    elevation: 0
  },
//   elementRemove: {
//     flex: 0.25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 5,

//     width: 30,
//     height: 30,
//     borderRadius: 30,
    

//     borderWidth: 1,
//     borderColor: 'black',
//     borderStyle: 'solid'
//   },
  elementRemoveText: {
    // textAlign: 'center',
  },
  rightDelete: {
    backgroundColor: '#ED5959',
    elevation: 2,
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',

    paddingHorizontal: 5,

    borderRadius: 5,
  },
  rightDeleteText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,

    alignItems: 'center'

    // textAlign: 'right'
  },
  leftEdit: {
    backgroundColor: '#2ecc71',
    elevation: 2,
    // flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    paddingHorizontal: 5,

    borderRadius: 5,
  },
  leftEditText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    padding: 10,

    // textAlign: 'right'
  }
})