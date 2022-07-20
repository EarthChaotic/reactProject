import { StyleSheet, Text, View ,Button } from 'react-native'
import React from 'react'
import User from './components/User';
import MyCustomTextWith from './components/MyCustomTextWith';
import Count from './components/Count';
import styles from './components/styles';
import InputText from './components/InputText';
import UserNameandPassword from './components/UserNameandPassword';
import UserNamePassword from './components/UserNamePassword';
import AlertComponent from './components/AlertComponent';
import ImageWithTextinput from './components/ImageWithTextInput';
import ButtonExample from './components/ButtonExample';
import Touchable_Example from './components/Touchable_Example';

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Count/> */}
     {/* <InputText/> */}
     {/* <UserNameandPassword/> */}
     {/* <UserNamePassword/> */}
     {/* <AlertComponent/> */}
     {/* <ImageWithTextinput/> */}
     {/* <ButtonExample/> */}
     <Touchable_Example/>
    </View>
  )
}

export default App