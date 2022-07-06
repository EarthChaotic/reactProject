import { View, Text } from 'react-native'
import React from 'react'

const Name = ({fname,lname}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Text>Your First Name Is {fname} Last Name Is {lname}</Text>
        </View>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{justifyContent:'center'}}>
        <Name fname='Jirapon' lname='Tresup'/>
        <Name fname='Purida' lname='TongSaard'/>
    </View>
  )
}

export default MyCustomTextWith