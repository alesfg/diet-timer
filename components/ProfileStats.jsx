import React, { Fragment, useState, useRef, useEffect } from "react";
import { View, Image, Text } from "react-native";
import Animated from "react-native-reanimated";
import FirstDateIcon from "../assets/ProfileStats/FirstDateIcon.png";
import LastDateIcon from "../assets/ProfileStats/LastDateIcon.png";
import themes from "./themes";
import LongestIcon from "../assets/ProfileStats/LongestIcon.png";
import NumberIcon from "../assets/ProfileStats/NumberIcon.png";
import BadgeIcon from "../assets/ProfileStats/BadgeIcon.png";
import MaximumBadgeIcon from "../assets/ProfileStats/MaximumBadgeIcon.png";
import { loadData } from "./Utilities.js";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState();
  const STATSIZE = 160;
  const SPACING = 35;
  const scrollY = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      const DATA = await getProfileData();
      setStatsData(DATA);
    })();
  }, []);

  const ITEMSIZE = STATSIZE * 0.5 + 10;
  return (
    <Animated.FlatList
      //style={{ backgroundColor: "gray" }}
      contentContainerStyle={{
        padding: SPACING,
        paddingBottom: (ITEMSIZE + SPACING) * 4,
        paddingTop: 60,
      }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={statsData}
      keyExtractor={(item) => item.title}
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

const getProfileData = async () => {
  let data = [{ title: "title", description: "description" }]; //Escribimos con plantilla vacia

  let firstDate = await loadData("initialDateStorage", "1");
  firstDate ? (firstDate = firstDate[0]) : (firstDate = null);
  data[0] = {
    title: "First diet date:",
    description: firstDate
      ? new Date(firstDate).toDateString()
      : "No diet registered",
    color: "red",
    icon: FirstDateIcon,
  };

  data[1] = {
    title: "Last diet date:",
    description: "Today",
    color: "blue",
    icon: LastDateIcon,
  };

  let longestDiet = await loadData("longestDietTime", "2");
  longestDiet ? (longestDiet = longestDiet[0]) : (longestDiet = null);
  let longestDietText = "ERROR";
  if (longestDiet != null) {
    longestDietText = Math.floor(longestDiet / 86400000) + " Days";
  } else {
    longestDietText = "No diet registered";
  }
  data[2] = {
    title: "Longest diet:",
    description: longestDietText,
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

  return data;
};

export default ProfileStats;
