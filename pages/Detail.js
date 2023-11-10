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
        <Text style={styles.backButton}>Kembali</Text>
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
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
    borderWidth: 5,  // Border width in pixels
    borderColor: 'black',  // Border color
    borderRadius: 10,  // Border radius (optional)
    
  },
  detailText: {
    fontSize: 18,
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",

    marginLeft: 28,
    marginRight: 28,
  }
});

export default Detail;