import React, { Fragment, useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DateIcon from "../assets/ProfileStats/DateIcon.png";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState(getProfileData());

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 0,
        width: 400,
      }}
      contentContainerStyle={{
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 25,
        paddingTop: 5,
      }}
    >
      {statsData.map((stats) => (
        <View
          key={stats.title}
          style={{
            backgroundColor: "rgba(48, 88, 230, 0.55)",
            borderRadius: 40,
            height: 130,
            width: 130,
            alignItems: "center",
            margin: 10,
            padding: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderColor: "#727272",
              borderWidth: 1,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={DateIcon}
              style={{ width: 30, height: 30, tintColor: "#DC1D1D" }}
            ></Image>
          </View>
          <Text style={{ color: "black", textAlign: "center" }}>
            {stats.title}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {stats.description}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const getProfileData = () => {
  let data = [{ title: "title", description: "description" }]; //Escribimos con plantilla vacia

  data[0] = {
    title: "Last diet date:",
    description: "HOY",
  };
  data[1] = {
    title: "Longest diet:",
    description: "3 Days!",
  };
  data[2] = {
    title: "Times diet had been broken:",
    description: "4",
  };
  data[3] = {
    title: "Maximum badge level:",
    description: "PEPE",
  };
  data[4] = {
    title: "First diet date:",
    description: "12/03/2002",
  };
  data[5] = {
    title: "asda123sd",
    description: "asdasd",
  };
  data[6] = {
    title: "asd232asd:",
    description: "asdasd",
  };
  data[7] = {
    title: "asda43sd",
    description: "asdasd",
  };

  return data;
};

export default ProfileStats;
