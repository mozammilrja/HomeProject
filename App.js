// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CountryList from './src/screens/CountryList'
import CityList from './src/screens/CityList'
import HomeCard from './src/screens/HomeCard'
import HomeFilter from './src/screens/HomeFilter'
import HomeLocation from './src/screens/HomeLocation'
import HomeNotify from './src/screens/HomeNotify'
import HomeSearch from './src/screens/HomeSearch'
import HomeRent from './src/screens/HomeRent'
import HomeBudget from './src/screens/HomeBudget'
import TypeOfHome from './src/screens/TypeOfHome'
import HomeType from './src/screens/HomeType'
import HomeConform from './src/screens/HomeConform'
import HomeDetails from './src/screens/HomeDetails'
import HomeContact from './src/screens/HomeContact'





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"HomeCard"}
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitleStyle: {
            height: 0,
            width: 0,
          },
        }}
      >

      <Stack.Screen
      name="CountryList"
      component={CountryList}
      options={{
        headerShown: true,
        headerTransparent: true,
        headerTitleStyle: {
          height: 0,
          width: 0,
        },
      }}
    />


    <Stack.Screen
    name="CityList"
    component={CityList}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="TypeOfHome"
    component={TypeOfHome}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeType"
    component={HomeType}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeBudget"
    component={HomeBudget}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeFilter"
    component={HomeFilter}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="HomeLocation"
    component={HomeLocation}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="HomeNotify"
    component={HomeNotify}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="HomeCard"
    component={HomeCard}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="HomeRent"
    component={HomeRent}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeSearch"
    component={HomeSearch}
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="HomeDetails"
    component={HomeDetails}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeContact"
    component={HomeContact}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  />
  <Stack.Screen
    name="HomeConform"
    component={HomeConform}
    options={{
      headerShown: true,
      headerTransparent: true,
      headerTitleStyle: {
        height: 0,
        width: 0,
      },
    }}
  /> 

     



        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

