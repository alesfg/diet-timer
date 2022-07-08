import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import styles from "./Styles";
import storage from "../storage/storage";
import badges from "./badgesArray.js";

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
      <Text style={styles.tittle}>DIET TIMER</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>Current Badge:</Text>
        <Image
          source={badges[calcularBadge()].img}
          resizeMode="cover"
          style={styles.badgeImage}
        />
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

  function calcularBadge() {
    let diff = new Date() - initialDate;
    let badgeActual = 1;

    //recorremos cada badge, y la primera que encontramos con un valor tiempo mayor al que tenemos nos salimos
    for (let i = 0; i < badges.length; i++) {
      if (badges[i].time > diff) {
        badgeActual = i;
        break;
      } else if (i == badges.length - 1) {
        badgeActual = i + 1;
      }
    }
    return badgeActual - 1;
  }
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
