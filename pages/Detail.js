import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const { doa, ayat, latin, artinya } = route.params; // Get data from navigation parameters
    const { navigate } = useNavigation();
  
    const navigateToDoa = () => {
      navigate("Doa"); // Navigate to the "Detail" component
    };
  return (
    <View style={styles.container}>
      <Text style={styles.doaTitle}>{doa}</Text>
      <Text style={styles.detailText}>Ayat: {ayat}</Text>
      <Text style={styles.detailText}>Latin: {latin}</Text>
      <Text style={styles.detailText}>Artinya: {artinya}</Text>
      <TouchableOpacity onPress={navigateToDoa}>
        <Text>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
      alignItems: "center", 
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