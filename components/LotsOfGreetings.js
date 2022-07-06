import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({name}) => {
    const {name} = props;
    const {date} = props;
    return(
        <View style={{alignItems:'center'}}>
            <Text>Your {name} {date} </Text>
        </View>
    )
}

const LotsOfGreetings = () => {
  return (
    <View style={{alignItems: 'center', top: 50}}>
        <Greeting name ='Merry Christmas ' date = '25 December 2022' />
        <Greeting name ='Happy New Year ' date = '1 January 2022' />
        <Greeting name ='Songkran Festival ' date = '13 April 2022' />
    </View>
  )
}

export default LotsOfGreetings