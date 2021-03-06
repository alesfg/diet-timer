import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import editPencil from "../assets/EditPencil.png";
import * as ImagePicker from "expo-image-picker";

function ProfilePhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{
          uri:
            selectedImage !== null
              ? selectedImage
              : "https://picsum.photos/200/200",
        }}
        style={{
          borderRadius: imageHeight,
          width: imageWidth,
          height: imageHeight,
          resizeMode: "cover",
          marginLeft: pencilHeight,
          marginRight: -10,
          borderWidth: 10,
          borderColor: "#024D8C",
        }}
      ></Image>
      <TouchableOpacity
        onPress={() => openImagePickerAsync(setSelectedImage)}
        style={{
          //   backgroundColor: "red",
          //   marginLeft: 10,
          marginBottom: imageHeight,
          padding: 5,
          marginLeft: 0,
        }}
      >
        <Image
          style={{ width: pencilWidth, height: pencilHeight }}
          source={editPencil}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
const imageWidth = 200;
const imageHeight = 200;

const pencilHeight = 30;
const pencilWidth = 30;

let openImagePickerAsync = async (setSelectedImageF) => {
  let persmissionResult =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (persmissionResult.granted === false) {
    alert("Required permision");
  } else {
    const PickerResult = await ImagePicker.launchImageLibraryAsync();

    if (PickerResult.cancelled === true) {
    } else {
      setSelectedImageF(PickerResult.uri);
    }
  }
};

export default ProfilePhoto;
