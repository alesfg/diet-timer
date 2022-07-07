import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import styles from "./Styles";
import storage from "../storage/storage";

export default function HomeScreen({ name = "Clown" }) {
  const [initialDate, setInitialDate] = useState(null);

  useEffect(() => {
    storage.load({
      key: "initialDateStorage",
      id: "1",
    });
    storage.getAllDataForKey("initialDateStorage").then((dates) => {
      setInitialDate(dates[0]);
    });
  }, []);

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
    const date = new Date();
    setInitialDate(date);
    storage.save({
      key: "initialDateStorage", // Note: Do not use underscore("_") in key!
      id: "1",
      data: date.getTime(),
      expires: null,
    });
  }
}
