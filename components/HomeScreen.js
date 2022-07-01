import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native'
import { useState, useEffect } from 'react'


export default function HomeScreen({ name = "Clown" }) {
  const [date, setDate] = useState(new Date())
  const [text, settext] = useState('Empty')
  const [diff, setdiff] = useState(null)


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