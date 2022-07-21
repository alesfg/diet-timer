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
import badges from "./badgesArray.js";

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

  let timesSinned = await loadData("timesSinned", "3");
  timesSinned ? (timesSinned = timesSinned[0]) : (timesSinned = null);
  data[3] = {
    title: "Times sinned:",
    description: timesSinned ? timesSinned + " times" : "No diet registered ",
    color: "green",
    icon: NumberIcon,
  };

  let badgeActual = 1;
  //recorremos cada badge, y la primera que encontramos con un valor tiempo mayor al que tenemos nos salimos
  for (let i = 0; i < badges.length; i++) {
    if (badges[i].time > longestDiet) {
      badgeActual = i;
      break;
    } else if (i == badges.length - 1) {
      badgeActual = i + 1;
    }
  }
  badgeActual = badgeActual - 1;
  data[4] = {
    title: "Maximum badge level:",
    description: badges[badgeActual].name,
    color: "orange",
    icon: BadgeIcon,
  };

  let longestDietDate = await loadData("longestDietDate", "4");
  longestDietDate
    ? (longestDietDate = longestDietDate[0])
    : (longestDietDate = null);
  data[5] = {
    title: "Longest diet date:",
    description: longestDietDate
      ? new Date(longestDietDate).toDateString()
      : "No diet registered ",
    color: "black",
    icon: MaximumBadgeIcon,
  };

  return data;
};

export default ProfileStats;
