// Example Preview.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

function Preview() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/TAUBAT.png")} />
      <Text style={styles.textAwal}>
        TAUBAT adalah aplikasi yang digunakan untuk mengingat bacaan doa
        sehari-hari. Aplikasi ini berguna terutama jika sedang bepergian ke luar
        rumah agar tetap ingat bacaan doa ketika melakukan berbagai kegiatan.
        Tujuan dari dibuatnya aplikasi ini adalah sebagai pengingat bagi umat
        muslim yang sedang beraktivitas, khususnya saya (Hoga) sendiri.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 225,
    height: 258,
    transform: [{ scale: 0.5 }],
    top: -135,
  },
  textAwal: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    top:-160,
    marginLeft: 28,
    marginRight: 28,
    
  },
  logoContainer: {
    flex: 1, // Make the logo container take up all available vertical space
    justifyContent: "flex-start", // Align the logo at the top
    alignItems: "center",
  },
});

export default Preview;
