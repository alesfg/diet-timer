import React, { Fragment, useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import styles from "./Styles";
import { loadData } from "./Utilities.js";
const ProfileName = ({ nombre }) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    (async () => {
      const nameAux = await loadData("profileName", "6");
      setName(nameAux[0]);
    })();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
      }}
    >
      <Text style={styles.badgeLabel}>{name ? name : ""}</Text>
    </View>
  );
};

export default ProfileName;
