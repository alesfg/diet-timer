import React, { Fragment, useState, useRef } from "react";
import { View, Image, Text } from "react-native";

const ProfileName = ({ nombre }) => {
  return (
    <View>
      <Text style={{ fontSize: 50, textAlign: "center" }}>{nombre} </Text>
    </View>
  );
};

export default ProfileName;
