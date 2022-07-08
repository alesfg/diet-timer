import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePhoto from "./ProfilePhoto";

function Profile() {
  return (
    <View style={styles.container}>
      <ProfilePhoto />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#eaeaa0",
    color: "#8ab971",
    alignItems: "center",
    paddingTop: 90,
  },
});

export default Profile;
