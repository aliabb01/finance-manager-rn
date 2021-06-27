import React, { useRef } from 'react'
import { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, Keyboard, ToastAndroid } from 'react-native'
import { Icon } from "react-native-elements";

import { Input } from 'react-native-elements';

export default function AddModal({ visibility, setVisibility, toggleFunction, dailyExp, dailySingle, setDaily, dailyId, setDailyId }) {

    const [formItem, setFormItem] = useState('')
    const [formItemPrice, setFormItemPrice] = useState(0)
    
    const form =  {
        id: dailyId,
        title: formItem,
        money: parseFloat(formItemPrice),
    }

    // Border bottom variables for form text inputs
    const [inputNameBorder, setInputNameBorder] = useState('gray')
    const [inputPriceBorder, setInputPriceBorder] = useState('gray')

    const ref_inputPrice = useRef()

    const push = () => {
        dailyExp.some((daily) => {
            if(daily.title === form.title) {
                // console.log(form)
                // console.log("yes");
                // dailyExp.filter((item) => {                
                //     if(item.title == dailySingle.title) {
                //         item.money += dailySingle.money
                //     }
                // })
                
                // setDuplicateDaily(true)
                // daily.money+=dailySingle.money

                const index = dailyExp.indexOf(daily)
                dailyExp.splice(index, 1)
                form.money+= daily.money

                setDaily([...dailyExp, form])
                setDailyId(dailyId + 1)
                ToastAndroid.show(form.title + " - " + form.money + "$" + " was added to daily expenditures", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
            }
            else {
                setDaily([...dailyExp, form])
                setDailyId(dailyId + 1)
                ToastAndroid.show(form.title + " - " + form.money + "$" + " was added to daily expenditures", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
            }
        })
        
        // setVisibility(!visibility)

        // setDaily([...dailyExp, form])
        // setDailyId(dailyId+1)
    }

    const closeModal = () => {
        setInputNameBorder('gray')
        setInputPriceBorder('gray')
        setVisibility(!visibility)
    }

    
    
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visibility}
                onRequestClose={() => {
                    setVisibility(!visibility)                    
                }}
            >

                <Pressable
                    style={styles.centeredView}
                    onPressOut={Keyboard.dismiss}
                    // () => setVisibility(false)
                >
                    <View>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Add new expenditure: </Text>

                            <Input
                                label='Item:'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ fontSize: 15 }}
                                inputContainerStyle={{ borderBottomColor: inputNameBorder }}
                                onFocus={() => setInputNameBorder('#2196F3')}
                                onBlur={() => setInputNameBorder('gray')}
                                placeholder='Enter Item'
                                onChangeText={value => setFormItem(value)}
                                // onTextInput={() => console.log(formItem)}
                                returnKeyType='next'
                                onSubmitEditing={() => ref_inputPrice.current.focus()}
                            />

                            <Input
                                label='Price:'
                                labelStyle={{ fontSize: 13 }}
                                inputStyle={{ fontSize: 15 }}
                                inputContainerStyle={{ borderBottomColor: inputPriceBorder }}
                                onFocus={() => setInputPriceBorder('#2196F3')}
                                onBlur={() => setInputPriceBorder('gray')}
                                placeholder='Enter price'
                                onChangeText={value => setFormItemPrice(value)}
                                // onTextInput={() => console.log(formItemPrice)}
                                keyboardType='numeric'
                                returnKeyType='done'
                                ref={ref_inputPrice}
                            />

                            <Pressable
                                style={styles.button}
                                onPress={() => push()}
                            >
                                <Text style={styles.textStyle}>Add to list</Text>
                            </Pressable>

                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => closeModal()}
                            >
                                <Icon 
                                    name="close"
                                    type="antdesign"
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Pressable>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    

    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 30,
    padding: 2,
    position: 'absolute',
    right: 10,
    top: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",

    fontWeight: 'bold',
    fontSize: 20
  }
})