import React, { Fragment, useState, useRef } from "react";
import { View, Image, Text } from "react-native";
import styles from "./Styles";

const ProfileName = ({ nombre }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
      }}
    >
      <Text style={styles.badgeLabel}>{nombre}</Text>
    </View>
  );
};

export default ProfileName;
