import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePhoto from "./ProfilePhoto";
import ProfileStats from "./ProfileStats";
import ProfileName from "./ProfileName";
import themes from "./themes";

function Profile() {
  return (
    <View style={styles.container}>
      <ProfileName nombre={"Kalomano"} />
      <ProfilePhoto />
      <ProfileStats />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.backgroundColor,
    alignItems: "center",
    paddingTop: 0,
  },
});

export default Profile;
