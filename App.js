import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
import { bootstrap } from './src/bootstrap'
import { Navigatopr } from './src/navigation/AppNavigation';


export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={ bootstrap }
        onFinish={ () => setIsReady(true) }
        onError={ err => console.log(err) }
      />
    )
  }


  return <Navigatopr />
}

