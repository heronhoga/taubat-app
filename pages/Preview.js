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
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <Card data={item}/>
  );

  return (
    
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("../assets/TAUBAT.png")} />
      <Text style={styles.textAwal}>
        TAUBAT adalah aplikasi yang digunakan untuk mengingat dosa-dosa yang harus dihindari.
        Sebagai umat muslim yang taat, kita harus bisa menjaga diri dari godaan dunia. Di dalam
        Aplikasi ini terdapat beberapa dosa yang harus dihindari.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Dosa')}>
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
    flex: 1, 
    justifyContent: "flex-start", 
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
