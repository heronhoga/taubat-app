import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardMain = ({ data }) => {
  const { navigate } = useNavigation();

  const navigateToDetail = () => {
    navigate("Detail", data);
  };

  return (
    <TouchableOpacity onPress={navigateToDetail}>
      <View style={styles.card}>
        <Text style={styles.title}>{data.dosa}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
});

export default CardMain;
