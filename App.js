import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import Home from "./views/Home";
import Statistics from  "./views/Statistics";
import Settings from "./views/Settings";
import About from "./views/About";



// Fonts
import { useFonts, OpenSans_400Regular } from "@expo-google-fonts/dev";

const Tab = createBottomTabNavigator();

function AppTabs() {
    
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Settings" component={SettingsScreen} />
    // </Tab.Navigator>

    <Tab.Navigator
      tabBarOptions={{ 
        activeBackgroundColor: "#D6F7FB",
        inactiveBackgroundColor: "#fff",
        activeTintColor: "#6C8EEF",
        inactiveTintColor: "black",        
      }}
      >

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon type="antdesign" name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon type="antdesign" name="linechart" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon type="feather" name="settings" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon type="antdesign" name="profile" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>

  );
}

export default function App() {

  const [animating, setAnimating] = useState(true);

  const closeActivityIndicator = () => setTimeout(
    () => setAnimating(false),
    4000
  )

  useEffect(() => {
    closeActivityIndicator()
  }, []);

  return (
    
    <NavigationContainer>
      {animating 
      ? <View style={[styles.container, styles.horizontal]}><ActivityIndicator  animating = {animating} size="large" color="#ff0000" /></View>
      : <AppTabs />}
      
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

{/* <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View> */}