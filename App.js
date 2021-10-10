import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import { Navigatopr } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store'


export default function App() {
  return (
    <Provider store={store} >
      <Navigatopr />
    </Provider>
  )
}

