import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import styles from "./Styles";

export default function HomeScreen({ name = "Clown" }) {
  const [initialDate, setInitialDate] = useState(null);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.tittle}>DIET TIMER</Text>
        <Text>{name}</Text>
        <Text>Current Badge</Text>
      </View>
      <View style={styles.containerTimerButton}>
        <Timer initialDate={initialDate} />
        <TouchableOpacity style={styles.button} onPress={reset}>
          {initialDate ? (
            <Text style={styles.textButton}>He pecado 🍖</Text>
          ) : (
            <Text style={styles.textButton}>Empezar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );

  function reset() {
    setInitialDate(new Date());
  }
}
