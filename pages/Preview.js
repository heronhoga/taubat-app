// Example Preview.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Preview() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
      .then((response) => response.json())
      .then((data) => {
        // Limit the data to the first 10 items
        setData(data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Card title={item.doa}/>
  );

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
      <Text style={styles.headerExample}>Beberapa doa:</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={styles.listPrevStyle}
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Doa')}>
        <Text style={styles.listText
        }>Selengkapnya..</Text>
      </TouchableOpacity>
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
    top: -20,
  },
  textAwal: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    top: -40,
    marginLeft: 28,
    marginRight: 28,
  },
  logoContainer: {
    flex: 1, // Make the logo container take up all available vertical space
    justifyContent: "flex-start", // Align the logo at the top
    alignItems: "center",
  },
  headerExample: {
    top: -50,
    backgroundColor: "#3dabd9",
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 28,
    marginRight: 28,
  },
  listPrevStyle: {
    top: -60,
  },
  listText: {
    backgroundColor: "#346072",
    padding: 10,
    textAlign: "justify",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    top: -30,
    marginLeft: 28,
    marginRight: 28,
    
  }
});

export default Preview;
