import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native'
import { useState, useEffect } from 'react'


export default function HomeScreen({ name = "Clown" }) {
  const [initialDate, setInitialDate] = useState(null)
  const [diff, setDiff] = useState("00:00:00:00")
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  let onDiet = initialDate ? true : false



    useEffect(() => {
      setInterval(() => {
        if(initialDate){
          let secondsAux = ((new Date() - initialDate)/(1000)%60)
          setSeconds(secondsAux)
          let minutesAux = Math.floor((new Date() - initialDate) / (60000)%60)
          setMinutes(minutesAux)
          let hoursAux = Math.floor((new Date() - initialDate) / (60000*60)%24)
          setHours(hoursAux)
          let daysAux = Math.floor((new Date() - initialDate) / (86400000))
          setDays(daysAux)

          Math.floor(secondsAux).toString().length===1 ? secondsAux="0"+Math.floor(secondsAux).toString() : secondsAux=Math.floor(secondsAux).toString()
          minutesAux.toString().length===1 ? minutesAux="0"+Math.floor(minutesAux).toString() : minutesAux=Math.floor(minutesAux).toString()
          hoursAux.toString().length===1 ? hoursAux="0"+Math.floor(hoursAux).toString() : hoursAux=Math.floor(hoursAux).toString()
          daysAux.toString().length===1 ? daysAux="0"+Math.floor(daysAux).toString() : daysAux=Math.floor(daysAux).toString()

          setDiff(daysAux +":"+ hoursAux +":"+ minutesAux +":"+ secondsAux)
        }
     }, 1000);
    }, [onDiet])
    

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
      <Text>{diff}</Text>
        <TouchableOpacity style={styles.button} onPress={() => setInitialDate(new Date())}>
          {initialDate ?
          <Text>He pecado 🍖</Text>
          :
          <Text>Empezar</Text>
          }
          
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
    },
    button: {
      backgroundColor:'#126a5c',
      borderRadius: 5,
      padding:10,
      margin:10
    }
})