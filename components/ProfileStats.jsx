import React, { Fragment, useState, useRef } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import DateIcon from "../assets/ProfileStats/DateIcon.png";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState(getProfileData());
  const STATSIZE = 140;
  const SPACING = 20;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <Animated.FlatList
      contentContainerStyle={{
        padding: SPACING,
        paddingBottom: SPACING + 60,
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={statsData}
      renderItem={({ item: stats, index }) => {
        const ITEMSIZE = STATSIZE * 0.5 + 10.4;
        const indexFixed = index % 2 === 0 ? index : index - 1;

        const inputRange = [
          -1,
          0,
          indexFixed * ITEMSIZE,
          ITEMSIZE * (indexFixed + 2),
        ];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [1, 1, 1, 0],
        });
        return (
          <Animated.View
            key={stats.title}
            style={{
              backgroundColor: "rgba(48, 88, 230, 0.55)",
              borderRadius: 40,
              height: STATSIZE,
              width: STATSIZE,
              alignItems: "center",
              margin: 10,
              padding: 20,
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 20,
              transform: [{ scale }],
              opacity,
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
          </Animated.View>
        );
      }}
    />
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
  data[6] = {
    title: "asd232asd:",
    description: "asdasd",
  };
  data[8] = {
    title: "asda122343sd",
    description: "asdasd",
  };
  data[9] = {
    title: "asd21332asd:",
    description: "asdasd",
  };
  data[10] = {
    title: "asda3443sd",
    description: "asdasd",
  };
  data[11] = {
    title: "asd25432asd:",
    description: "asdasd",
  };
  data[12] = {
    title: "asda4365sd",
    description: "asdasd",
  };

  return data;
};

export default ProfileStats;
