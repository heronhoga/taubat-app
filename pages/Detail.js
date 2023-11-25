import React from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Detail = ({ route }) => {
  const { dosa, penjelasan } = route.params;
    const { navigate } = useNavigation();
  
    const navigateToDoa = () => {
      navigate("Dosa");
    };
  return (
    <View style={styles.container}>
      <Text style={styles.doaTitle}>{dosa}</Text>
      <Text style={styles.detailText}>Penjelasan: {penjelasan}</Text>
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
    borderWidth: 5, 
    borderColor: 'black',
    borderRadius: 10,
    
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