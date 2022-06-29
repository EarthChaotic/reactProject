import {Text, View } from 'react-native'
import React from 'react'

const User = () => {
    const users = [
        {id : 1,name:'John'},
        {id : 2,name:'Mary'}
    ]

  return (
    <View>
        users.map{(User,index)=>{
            return <Text key = {User.id}>{index+1}.{User.name}</Text>
        }}
    </View>
  )
}

export default User

const styles = StyleSheet.create({})