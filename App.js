import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'
import User from './components/User';
import MyCustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import styles from './components/styles';
import InputText from './components/InputText';
import UserNameandPassword from './components/UserNameandPassword';
import UserNamePassword from './components/UserNamePassword';

const App = () => {
  return (
    <View>
      {/* <Count/> */}
     {/* <InputText/> */}
     {/* <UserNameandPassword/> */}
     <UserNamePassword/>
    </View>
  )
}

export default App