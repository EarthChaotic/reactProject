import { View, Text, StyleSheet,Button } from 'react-native'
import React from 'react'
import Logo from './components/Logo';
import StySheet from './components/StySheet';
import Textinputexample from './components/TextinputExample';
import Cat from './components/Cat';
import Cafe from './components/Cafe';

const App = () => {
  const showData =  ()=> {
    alert("Hello Button")
  }

  return (
    <View>
      <Text style={[styles.title,styles.warning]}>Hello React Native</Text>
      <Logo />
      <Button
      onPress={showData}
        title='Click Me'
      />
      {/* <StySheet/> */}
      {/* <Textinputexample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
  },
  warning: {
    color: 'red'
  }
});