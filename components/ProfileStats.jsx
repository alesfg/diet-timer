import React, { Fragment, useState, useRef } from "react";
import { View, Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import DateIcon from "../assets/ProfileStats/DateIcon.png";
import themes from "./themes";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState(getProfileData());
  const STATSIZE = 160;
  const SPACING = 35;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const ITEMSIZE = STATSIZE * 0.5 + 10;
  return (
    <Animated.FlatList
      //style={{ backgroundColor: "gray" }}
      contentContainerStyle={{
        padding: SPACING,
        paddingBottom: ITEMSIZE * 5,
        paddingTop: 60,
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={statsData}
      renderItem={({ item: stats, index }) => {
        const indexFixed = index % 2 === 0 ? index : index - 1;

        const inputRange = [-10000, indexFixed * (ITEMSIZE - 8), 10000];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [-40, 1, -60],
        });
        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [-50, 1, -120],
        });
        return (
          <Animated.View
            key={stats.title}
            style={{
              margin: 2,
              backgroundColor: themes.colors.primaryColor,
              borderRadius: 40,
              height: STATSIZE,
              width: STATSIZE,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: themes.colors.black,
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
                borderColor: themes.colors.secundaryColor,
                borderWidth: 2,
                backgroundColor: themes.colors.white,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={DateIcon}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: themes.colors.secundaryColor,
                }}
              ></Image>
            </View>
            <Text
              style={{
                color: themes.colors.secundaryColor,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {stats.title}
            </Text>
            <Text style={{ color: themes.colors.white, textAlign: "center" }}>
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
    title: "asda43ert65sd",
    description: "asdasd",
  };
  data[13] = {
    title: "asda436ert5sd",
    description: "asdasd",
  };
  data[14] = {
    title: "asdawe4365sd",
    description: "asdasd",
  };
  data[15] = {
    title: "asda43wer65sd",
    description: "asdasd",
  };

  return data;
};

export default ProfileStats;
