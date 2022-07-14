import React from 'react'
import { Audio } from 'expo-av';
import pwaa from '../assets/sound/pwaa.mp3'

  

const audio = () => {

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(pwaa);

    console.log('Playing Sound');
    await sound.playAsync(); }
    
    playSound()
    .then(res => console.log(res))
    .catch(err => console.log(err));
}


export default audio