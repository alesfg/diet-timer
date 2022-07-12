import React, { Fragment, useState, useRef } from "react";
import { View, Image, Text } from "react-native";

const ProfileName = ({ nombre }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: 30,
      }}
    >
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
        }}
      >
        {nombre}
      </Text>
    </View>
  );
};

export default ProfileName;
