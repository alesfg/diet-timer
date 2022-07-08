import React from "react";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Badge from "./Badge";
import badges from "./badgesArray.js";

export default function Badges() {
  return (
    <View style={styles.container}>
      {badges.map((badge) => (
        <Badge
          name={badge.name}
          img={badge.img}
          text={badge.text}
          key={badge.id}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#eaeaa0",
    color: "#8ab971",
    padding: 100,
  },
});
