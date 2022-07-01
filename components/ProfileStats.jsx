import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ProfileStats = () => {
  const [statsData, setStatsData] = useState(getProfileData());

  return (
    <FlatList
      data={statsData}
      renderItem={({ item: stats }) => (
        <View>
          <Text style={{ fontWeight: "bold" }}>{stats.title}</Text>
          <Text>{stats.description}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => <Text></Text>}
    />
  );
};

const getProfileData = () => {
  let data = [{ title: "title", description: "description" }]; //Escribimos con plantilla vacia

  data[0] = { title: "title0", description: "description0" };
  data[1] = { title: "title1", description: "description1" };

  return data;
};

export default ProfileStats;
