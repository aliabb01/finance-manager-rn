import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Linking } from 'react-native';
import { Icon } from "react-native-elements";

import * as WebBrowser from 'expo-web-browser';

function AboutChip({ icon, iconColor, type }) {
    return (
        <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 30, padding: 10, marginVertical: 10 }}>                    
                    
            <View>
                <Icon 
                    name={icon}
                    type='antdesign'
                    color={iconColor}
                />
            </View>
            <View>                

                { type=='mail' && (
                    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('mailto:ali3abbasov@gmail.com')}>
                        <Text style={{ marginHorizontal: 10 }}>
                            ali3abbasov@gmail.com
                        </Text>
                    </TouchableOpacity>
                )}

                {
                    type=='github' && (
                        <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://github.com/aliabb01')}>
                            <Text style={{ marginHorizontal: 10 }}>
                                aliabb01
                            </Text>
                        </TouchableOpacity>
                    )
                }

            </View>
        
        </View>
    )
}

export default AboutChip