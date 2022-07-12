import React, { Fragment, useState, useRef } from "react";
import { View, Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import FirstDateIcon from "../assets/ProfileStats/FirstDateIcon.png";
import LastDateIcon from "../assets/ProfileStats/LastDateIcon.png";
import themes from "./themes";
import LongestIcon from "../assets/ProfileStats/LongestIcon.png";
import NumberIcon from "../assets/ProfileStats/NumberIcon.png";
import BadgeIcon from "../assets/ProfileStats/BadgeIcon.png";
import MaximumBadgeIcon from "../assets/ProfileStats/MaximumBadgeIcon.png";

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
                source={stats.icon}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: stats.color,
                  resizeMode: "contain",
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
    title: "First diet date:",
    description: "12/03/2002",
    color: "red",
    icon: FirstDateIcon,
  };
  data[1] = {
    title: "Last diet date:",
    description: "HOY",
    color: "blue",
    icon: LastDateIcon,
  };
  data[2] = {
    title: "Longest diet:",
    description: "3 Days!",
    color: "purple",
    icon: LongestIcon,
  };
  data[3] = {
    title: "Times sinned:",
    description: "4",
    color: "green",
    icon: NumberIcon,
  };
  data[4] = {
    title: "Maximum badge level:",
    description: "PEPE",
    color: "orange",
    icon: BadgeIcon,
  };

  data[5] = {
    title: "Maximum badge date:",
    description: "24/05/1999",
    color: "black",
    icon: MaximumBadgeIcon,
  };
  data[6] = {
    title: "asd232asd:",
    description: "EXAMPLE",
    color: "navy",
    icon: LongestIcon,
  };
  data[7] = {
    title: "asda43sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[6] = {
    title: "asd232asd:",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[8] = {
    title: "asda122343sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[9] = {
    title: "asd21332asd:",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[10] = {
    title: "asda3443sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[11] = {
    title: "asd25432asd:",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[12] = {
    title: "asda43ert65sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[13] = {
    title: "asda436ert5sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[14] = {
    title: "asdawe4365sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };
  data[15] = {
    title: "asda43wer65sd",
    description: "EXAMPLE",
    color: "blue",
    icon: LongestIcon,
  };

  return data;
};

export default ProfileStats;
