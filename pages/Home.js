import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
      
      <Image
        style={styles.tinyLogo}
        source={require("../assets/TAUBAT.png")}
      />
      <Text style={styles.textAwal}>Aplikasi kumpulan dosa</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Main')}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center", 
    },
    tinyLogo: {
      width: 225, 
      height: 258,
      marginBottom: 50
    },
    button: {
        backgroundColor: '#68C0E5',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      textAwal: {
        backgroundColor: '#346072',
        padding: 10,
        textAlign: 'justify',
        marginBottom: 50,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
      }
  });

export default Home;
