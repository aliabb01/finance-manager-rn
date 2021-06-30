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

    const [oldPrice, setOldPrice] = useState('')

    const [errors, setErrors] = useState({})

    const setNameError = () => {
        setErrors({
            'formItem': 'Please enter name of the item'
        })
    }

    const setPriceError = () => {
        setErrors({
            'formItemPrice': 'Please enter price of the item'
        })
    }

    const setBothErrors = () => {
        setErrors({
            'formItem': 'Please enter name of the item',
            'formItemPrice': 'Please enter price of the item'
        })
    }

    const handleNameChange = (value) => {
        setFormItem(value)

        if(value == '') {
            setErrors({
                ...errors, 'formItem': 'Please enter name of the item'
            })
        }
        else {
            setErrors('')
        }
    } 

    const handlePriceChange = (value) => {
        setFormItemPrice(value)
        setOldPrice(value.toString())

        if(value == (null || 0)) {
            setErrors({
                ...errors, 'formItemPrice': 'Please enter price of the item'
            })
        }
        else {
            setErrors('')
        }
    }

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
            }
        })

        setDaily([...dailyExp, form])
        setDailyId(dailyId + 1)
        ToastAndroid.show(form.title + " - " + oldPrice + "$" + " was added to daily expenditures", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
        // setFormItem('')
        // setFormItemPrice(0)
    }

    


    const handlePushDaily = () => {
        if(formItem != '' && formItemPrice != (null || 0)) {
            push()
        }
        else if(formItem == '' && formItemPrice != (null || 0)) {
            setNameError()
        }
        else if(formItem != '' && formItemPrice == (null || 0)) {
            setPriceError()
        }
        else {
            setBothErrors()
            // console.log("ERR", errors)
            alert("Enter details first")
        }

        // console.log(errors)
    }

    const closeModal = () => {
        setInputNameBorder('gray')
        setInputPriceBorder('gray')
        setVisibility(!visibility)
        setFormItem('')
        setFormItemPrice(0)
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
                                containerStyle={{ marginTop: 20 }}
                                label='Item:'
                                labelStyle={{ fontSize: 13, fontWeight: 'bold', color: 'hsla(214, 89%, 52%, 1)' }}
                                inputStyle={{ fontSize: 15 }}
                                inputContainerStyle={{ borderBottomColor: inputNameBorder }}
                                onFocus={() => setInputNameBorder('hsla(214, 89%, 52%, 1)')}
                                onBlur={() => setInputNameBorder('gray')}
                                placeholder='Enter Item'
                                onChangeText={handleNameChange}
                                // onTextInput={() => console.log(formItem)}
                                returnKeyType='next'
                                onSubmitEditing={() => ref_inputPrice.current.focus()}
                                errorMessage={errors.formItem}
                            />

                            <Input
                                containerStyle={{ marginTop: 20, marginBottom: 20 }}
                                label='Price:'
                                labelStyle={{ fontSize: 13, fontWeight: 'bold', color: 'hsla(214, 89%, 52%, 1)' }}
                                inputStyle={{ fontSize: 15 }}
                                inputContainerStyle={{ borderBottomColor: inputPriceBorder }}
                                onFocus={() => setInputPriceBorder('hsla(214, 89%, 52%, 1)')}
                                onBlur={() => setInputPriceBorder('gray')}
                                placeholder='Enter price'
                                onChangeText={handlePriceChange}
                                // onTextInput={() => console.log(formItemPrice)}
                                keyboardType='numeric'
                                returnKeyType='done'
                                ref={ref_inputPrice}
                                errorMessage={errors.formItemPrice}
                                rightIcon={
                                    <Icon 
                                        name='dollar-sign'
                                        type='feather'
                                    />
                                }
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handlePushDaily()}
                            >
                                <Text style={styles.textStyle}>Add to list</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.buttonClose}
                                onPress={() => closeModal()}
                            >
                                <Icon 
                                    name="close"
                                    type="antdesign"
                                    color="#6C8EEF"
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
    padding: 45,
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
    backgroundColor: 'hsla(214, 100%, 63%, 0.25)',
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 4,
    position: 'absolute',
    right: 10,
    top: 10
  },
  textStyle: {
    color: "hsla(214, 100%, 63%, 1)",
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