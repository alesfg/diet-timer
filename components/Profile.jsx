import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ProfilePhoto from "./ProfilePhoto";
import ProfileStats from "./ProfileStats";
import themes from "./themes";

function Profile() {
  return (
    <View style={styles.container}>
      <ProfilePhoto />
      <ProfileStats />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.backgroundColor,
    alignItems: "center",
    paddingTop: 45,
  },
});

export default Profile;
