import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal  } from "react-native";

function AddButton() {

    return (
        <TouchableOpacity 
            style={styles.addBtn}
            onPress={() => alert("Hello. Here will be a form inside a modal to add finances")}
        >

            <Text style={styles.addBtnText}>
                +
            </Text>
            
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
  addBtn: {
    backgroundColor: 'cyan',
    borderRadius: 100,
    
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addBtnText: {
    fontSize: 30,
    paddingHorizontal: 22,
    paddingVertical: 10
  }
});

export default AddButton;
