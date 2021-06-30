import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Keyboard, ToastAndroid } from 'react-native'

import { Icon } from "react-native-elements";
import { Input } from 'react-native-elements';

export default function EditModal({ visibility, setVisibility, editEl, setDExp, ID, dailyData }) {
    const closeModal = () => {           
        setVisibility(!visibility)
    }    

    const [editElTitle, setEditElTitle] = useState(editEl[0].title)
    const [editElPrice, setEditElPrice] = useState(editEl[0].money)

    const [editForm, setEditForm] = useState({
        id: editEl[0].id,
        title: editElTitle,
        money: parseFloat(editElPrice),
    })

    const handleEditName = (value) => {
        setEditElTitle(value)
    }

    const handleEditPrice = (value) => {
        setEditElPrice(parseFloat(value))
    }

    const editDaily = (id) => {

        const objIndex = dailyData.findIndex((obj => obj.id == id))
        
        dailyData.some((daily) => {
            if(daily.id == ID) {
                if(daily.title != editElTitle) {
                    daily.title = editElTitle                
                }
                if(daily.money != editElPrice) {
                    daily.money = editElPrice
                }
                dailyData.splice(objIndex, 1)
                dailyData.splice(objIndex, 0, editForm)
            }
        })

        setDExp([...dailyData])
        // console.log(dailyData)

        
    } 

    useEffect(() => {
        setEditForm({
            id: editEl[0].id,
            title: editElTitle,
            money: editElPrice
        })        
        // console.log({
        //     id: editEl[0].id,
        //     title: editElTitle,
        //     money: editElPrice
        // })
    }, [editElTitle, editElPrice])

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
                            <Text style={styles.modalText}>Edit expenditure: </Text>
                            {/* <Text>{editEl[0].title}</Text> */}

                            <Input
                                containerStyle={{ marginTop: 20 }}
                                label='Item:'
                                labelStyle={{ fontSize: 13, fontWeight: 'bold', color: '#6C8EEF' }}
                                inputStyle={{ fontSize: 15 }}
                                // onFocus={() => setInputNameBorder('#2196F3')}
                                // onBlur={() => setInputNameBorder('gray')}
                                placeholder='Enter Item'
                                defaultValue={editEl[0].title}
                                onChangeText={handleEditName}
                                // onTextInput={() => console.log(formItem)}
                                returnKeyType='next'
                                // onSubmitEditing={() => ref_inputPrice.current.focus()}
                                // errorMessage={errors.formItem}
                            />

                            <Input
                                containerStyle={{ marginTop: 20, marginBottom: 20 }}
                                label='Price:'
                                labelStyle={{ fontSize: 13, fontWeight: 'bold', color: '#6C8EEF' }}
                                inputStyle={{ fontSize: 15 }}
                                // onFocus={() => setInputPriceBorder('#2196F3')}
                                // onBlur={() => setInputPriceBorder('gray')}
                                placeholder='Enter price'
                                defaultValue={(editEl[0].money).toString()}
                                onChangeText={handleEditPrice}
                                // onTextInput={() => console.log(formItemPrice)}
                                keyboardType='numeric'
                                returnKeyType='done'
                                // ref={ref_inputPrice}
                                // errorMessage={errors.formItemPrice}
                                rightIcon={
                                    <Icon 
                                        name='dollar-sign'
                                        type='feather'
                                    />
                                }
                            />

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => editDaily(ID)}
                            >
                                <Text style={styles.textStyle}>Save</Text>
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
        backgroundColor: '#2ecc71',
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20
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
