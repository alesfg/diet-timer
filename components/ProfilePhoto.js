import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import average from "../assets/average.jpg";
import editPencil from "../assets/EditPencil.png";
import * as ImagePicker from "expo-image-picker";
import themes from "./themes";
import { loadData, saveData } from "./Utilities.js";

function ProfilePhoto() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      const imageProfile = await loadData("ProfileImage", "5");
      if (imageProfile[0] != null && imageProfile[0] != undefined) {
        setSelectedImage(imageProfile[0]);
      }
    })();
  }, []);

  return (
    <View
      style={{
        flexDirection: "row",
        height: "40%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -60 - 1000,
      }}
    >
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
          borderColor: themes.colors.secundaryColor,
          borderWidth: 5,
        }}
      ></Image>
      <TouchableOpacity
        onPress={() => openImagePickerAsync(setSelectedImage)}
        style={{
          //   backgroundColor: "red",
          //   marginLeft: 10,
          marginBottom: "40%",

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
      saveData(PickerResult.uri, "ProfileImage", "5");
    }
  }
};

export default ProfilePhoto;
