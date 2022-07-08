import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import styles from "./Styles";

const Timer = ({ initialDate, actualizarBadge }) => {
  const [days, setDays] = useState("0");
  const [interval, setIntervalVar] = useState(null);
  const [diffTimer, setDiffTimer] = useState("00:00:00");

  useEffect(() => {
    clearInterval(interval);
    crearIntervalo();

    initialDate && actualizarDiferenciaTiempos();
    initialDate && actualizarBadge();
  }, [initialDate]);

  return (
    <View style={styles.timer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.digits}>{days}</Text>
        <Text style={styles.days}>{days === 1 ? "day" : "days"}</Text>
      </View>
      <Text style={styles.diffTimer}>{diffTimer}</Text>
    </View>
  );

  function crearIntervalo() {
    setIntervalVar(
      setInterval(() => {
        if (initialDate) {
          actualizarDiferenciaTiempos();
          actualizarBadge();
        }
      }, 1000)
    );
  }

  function actualizarDiferenciaTiempos() {
    //calculamos la diferencia de tiempo
    let diferencia = new Date() - initialDate;
    let seconds = Math.floor((diferencia / 1000) % 60);
    let minutes = Math.floor((diferencia / 60000) % 60);
    let hours = Math.floor((diferencia / 3600000) % 24);
    let daysAux = Math.floor(diferencia / 86400000);

    //Controlamos que tenga dos cifras el string (en caso de tener una la primera es un 0)
    seconds = leftCero(seconds);
    minutes = leftCero(minutes);
    hours = leftCero(hours);

    //Guardamos los nuevos estados calculados
    setDiffTimer(hours + ":" + minutes + ":" + seconds);
    setDays(daysAux);
  }

  function leftCero(number) {
    //funcion que añade un 0 en caso de ser un numero de una cifra
    number.toString().length === 1
      ? (number = "0" + Math.floor(number).toString())
      : (number = Math.floor(number).toString());
    return number;
  }
};

export default Timer;
