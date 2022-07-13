import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import styles from "./Styles";
import storage from "../storage/storage";
import badges from "./badgesArray.js";

export default function HomeScreen({ name = "Clown" }) {
  const [initialDate, setInitialDate] = useState(null);
  const [badge, setBadge] = useState(badges[0]);

  useEffect(() => {
    setInitialDateAwait();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>DIET TIMER</Text>
      <View style={styles.badge}>
        <View style={{ alignItems: "center", marginLeft: 60 }}>
          <Text style={styles.badgeLabel}>{badge.name}</Text>
          <Text style={styles.badgeText}>Current Badge</Text>
        </View>
        <Image
          source={badge.img}
          resizeMode="cover"
          style={styles.badgeImage}
        />
      </View>
      <View style={styles.containerTimerButton}>
        <Timer initialDate={initialDate} actualizarBadge={actualizarBadge} />
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

  function actualizarBadge() {
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
    badgeActual = badgeActual - 1;
    setBadge(badges[badgeActual]);
  }
  function reset() {
    const date = new Date();

    saveData(date.getTime(), "initialDateStorage", "1");
  }

  function saveData(data, dataKey, dataId) {
    setInitialDate(data);
    storage.save({
      key: dataKey, // Note: Do not use underscore("_") in key!
      id: dataId,
      data: data,
      expires: null,
    });
  }

  async function loadData(datakey, dataId) {
    //returns data

    let data;

    storage.load({
      key: datakey,
      id: dataId,
    });

    data = await storage.getAllDataForKey(datakey);

    return data;
  }

  async function setInitialDateAwait() {
    //Es necesaria esta funcion para esperar al resultado de loadData
    let dateStoraged = await loadData("initialDateStorage", "1");
    setInitialDate(dateStoraged);
  }
}
