import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Badge({ name, img, text }) {
  return (
    <View style={styles.badge}>
      <Image source={img} resizeMode="cover" style={styles.imageContainer} />
      <View>
        <Text>{name}</Text>
        <Text>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  badge: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  title: {
    color: "#126a5c",
    fontSize: 20,
    // backgroundColor: '#127f4a', '#f8efba'
  },
});
