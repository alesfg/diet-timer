import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'

export default function HomeScreen({ name = "Clown" }) {

  /* const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  const [timeOn, setTimeOn] = useState(false) */

  /* useEffect(() => {
    let interval = null;
    
    if(timeOn){
      interval = setInterval(() => {
        setSeconds(prevTime => prevTime+10)
      }, 10000)
    }else{
      clearInterval(interval)
    }
    return () => clearInterval(interval)

  }, [timeOn]) */
  

  return (
    <View style={styles.container}>
      <View>
        <View>
          {/* <Image /> */}
        </View>
        <Text>{name}</Text>
        <Text>Current Badge</Text>
      </View>
      {/* Contador */}
      <View>
        <Text>{days != 0 ?? days+":"}{hours != 0 ?? hours+":"}{minutes != 0 ?? minutes+":"}{seconds}</Text>
        <TouchableOpacity onPress={setTimeOn(true)}>
          <Text>🍖</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        backgroundColor: '#eaeaa0',
        color: '#8ab971',
        alignItems: 'center',
        paddingTop: 40,
    },
    title: {
        color: '#126a5c',
        fontSize: 20,
        // backgroundColor: '#127f4a', '#f8efba'
    }
})