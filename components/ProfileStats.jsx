import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState(getProfileData());

  return (
    <FlatList
      style={{ margin: 40, marginTop: 0 }}
      // style={{ marginBottom: 100 }}
      data={statsData}
      renderItem={({ item: stats }) => (
        <View>
          <Text style={{ fontWeight: "bold" }}>{stats.title}</Text>
          <Text>{stats.description}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <Text>-------------------------------</Text>
      )}
    />
  );
};

const getProfileData = () => {
  let data = [{ title: "title", description: "description" }]; //Escribimos con plantilla vacia

  data[0] = {
    title: "Last diet date:",
    description: "Pues el último día que comenzaste la dieta",
  };
  data[1] = {
    title: "Longest diet:",
    description: "Pues has durado un montón de tiempo",
  };
  data[2] = {
    title: "Times diet had been broken:",
    description: "has roto la dieta mazo veces hermano",
  };
  data[3] = {
    title: "Maximum badge level:",
    description: "Alcanzaste la badge de puto amo",
  };
  data[4] = {
    title: "First diet date:",
    description: "la primera vez que usaste la aplicacion pues era hace mazo",
  };
  data[5] = {
    title: "asdasd",
    description: "asdasd",
  };
  data[6] = {
    title: "asdasd:",
    description: "asdasd",
  };
  data[7] = {
    title: "asdasd",
    description: "asdasd",
  };

  return data;
};

export default ProfileStats;
