import { StyleSheet, Text, View ,Button,Image } from 'react-native'
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
import TouchablePractice from './components/TouchablePractice';
import Dynamicstyle from './components/Dynamicstyle';
import ModalExample from './components/ModalExample';
import ModalPractice from './components/ModalPractice';

const App = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      {/* <Count/> */}
     {/* <InputText/> */}
     {/* <UserNameandPassword/> */}
     {/* <UserNamePassword/> */}
     {/* <AlertComponent/> */}
     {/* <ImageWithTextinput/> */}
     {/* <ButtonExample/> */}
     {/* <Touchable_Example/> */}
     {/* <TouchablePractice/> */}
     {/* <Dynamicstyle/> */}
     {/* <ModalExample/> */}
     <ModalPractice/>
     
    </View>
  )
}

export default App

