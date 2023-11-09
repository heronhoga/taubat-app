import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Detail = ({ route }) => {
  const { doa, ayat, latin, artinya } = route.params; // Get data from navigation parameters

  return (
    <View style={styles.container}>
      <Text style={styles.doaTitle}>{doa}</Text>
      <Text style={styles.detailText}>Ayat: {ayat}</Text>
      <Text style={styles.detailText}>Latin: {latin}</Text>
      <Text style={styles.detailText}>Artinya: {artinya}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  doaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Detail;