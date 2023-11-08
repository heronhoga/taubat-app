import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({ title }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
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

export default Card;
