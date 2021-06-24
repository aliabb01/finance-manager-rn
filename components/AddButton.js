import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable, TouchableWithoutFeedback  } from "react-native";
import { Icon } from "react-native-elements";

import AddModal from './AddModal'

export default function AddButton({ currentDaily }) {    

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        // console.log(currentDaily)
        setModalVisible(!modalVisible)
    }

    const [daily, setDaily] = useState(currentDaily)

    

    return (
        <View>
            
            <AddModal 
                visibility={modalVisible}
                setVisibility={setModalVisible}
                toggleFunction={toggleModal}
            />

            { !modalVisible && (
                <TouchableOpacity 
                style={styles.addBtn}
                onPress={ () => toggleModal()}
                >                
                    <Icon
                        type='material'                    
                        name='add'
                        color='#fff'
                        style={styles.addBtnIcon}    
                    >
                    </Icon>
                
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
  addBtn: {
    // backgroundColor: '#6C8EEF',    
    // borderRadius: 100,
    
    // position: 'absolute',
    // bottom: 20,
    // right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6C8EEF',
    position: 'absolute',
    bottom: 10,
    right: 10,

    borderStyle: 'solid',
    borderColor: 'transparent',
    borderWidth: 1,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
  addBtnIcon: {
    color: 'white',
    // fontSize: 30,
    // paddingHorizontal: 22,
    // paddingVertical: 10
    // borderColor: 'black',
    // borderWidth: 1,
    // borderStyle: 'solid'
  },

  
});

// export default AddButton;
