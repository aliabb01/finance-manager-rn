import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal  } from "react-native";
import { Icon } from "react-native-elements";

function AddButton() {

    return (
        <TouchableOpacity 
            style={styles.addBtn}
            onPress={() => alert("Hello. Here will be a form inside a modal to add finances")}
        >

                <Icon
                    type='material'                    
                    name='add'
                    color='#fff'
                    style={styles.addBtnIcon}    
                >
                </Icon>
            
        </TouchableOpacity >
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
  }
});

export default AddButton;
