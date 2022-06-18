import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { useState } from 'react'
import clown from '../assets/clown.jpg'
import noob from '../assets/noob.png'
import average from '../assets/average.jpg'
import fitness from '../assets/fitness.png'
import Badge from './Badge'

export default function Badges() {
    const badges = [
        {name: "Clown", img: clown, time: "0+ Hours"},
        {name: "Noob", img: noob, time: "24+ Hours"},
        {name: "Average", img: average, time: "48+ Hours"},
        {name: "Fitness", img: fitness, time: "100+ Hours"}
    ]
    const [badge, setBadge] = useState(badges[0])
  return (
    <View style={styles.container}>
        {badges.map(badge => <Badge name={badge.name} img={badge.img} time={badge.time} />)}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#eaeaa0',
        color: '#8ab971',
        padding:100
    }
})