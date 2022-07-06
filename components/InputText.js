import {StyleSheet, View, Text ,TextInput} from 'react-native'
import React, {useState}from 'react'

const InputText = () => {

    const [userName,setUserName] = useState('');
  return (
    <View >
      <Text>Insert any text in below input</Text>
      <TextInput
        value={userName}
        onChangeText = {(userName)=>{setUserName(userName)}}
        style ={styles.textinput}
        placeholder='Pleas input username'      
      
      />
      <Text>{userName}</Text>
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({
    textinput :{
        width:250,
        height:45,
        padding:10,
        marginTop:20,
        marginBottom:10,
        textAlign:'center'
    }

})