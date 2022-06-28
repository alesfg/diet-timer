import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native'
import { useState, useEffect } from 'react'

import DateTimePicker from '@react-native-community/datetimepicker';


export default function HomeScreen({ name = "Clown" }) {
  const [date, setDate] = useState(new Date())
  const [mode, setmode] = useState(mode)
  const [show, setshow] = useState(false)
  const [text, settext] = useState('Empty')
  const [diff, setdiff] = useState(null)


  
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date
    setshow(Platform === 'ios')
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes()
    settext(fDate + '\n' + fTime)

    console.log(fDate)
    console.log(fTime)
  }

  const showMode = (currentMode) => {
    setshow(true)
    setmode(currentMode)
  }
  

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
      <Text>{text}</Text>
      <Button title='Fecha' onPress={() => showMode('date')} />
      <Button title='Hora' onPress={() => showMode('time')} />
      {show && (
        <DateTimePicker
        testID = 'dateTimePicker'
        value={date}
        mode={mode}
        is24Hour={true}
        display='default'
        onChange={onChange}
        />
      )}
        <TouchableOpacity>
          <Text>He pecado 🍖</Text>
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