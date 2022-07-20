import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState }  from 'react'

const UserNamePassword = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const checkInput = () => {
        if (!Name.trim()) {
            alert('Please Enter Name');
            return;
        }
        else if(!Email.trim()){
            alert('Please Enter Email')
        }
        else{
            alert('Success')
        }
    }
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.textInputStyle}
        placeholder="Name"
        onChangeText={(Name) => {
            setName(Name);
          }}
        />


        <TextInput
        style={styles.textInputStyle}
        placeholder="Email"
        onChangeText={(Email) => {
            setEmail(Email);
          }}
        />

<Button
        title="Submit"
        style={styles.ButtonStyle}
        onPress={checkInput}
      />
    </View>
  )
}

export default UserNamePassword

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:35,
    },
    textInputStyle: {
        width:'100%',
        height: 40,
        paddingHorizontal:5,
        borderWidth:0.5,
        marginBottom:15,
    },
    ButtonStyle :{
    }
});