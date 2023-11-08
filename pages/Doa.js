import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Card from "../components/Card";
import CardMain from "../components/CardMain";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Doa() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <CardMain title={item.doa} meaning={item.artinya}/>
  );

  return (
    <View style={styles.container}>


      <Text style={styles.headerExample}>Daftar Doa</Text>
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

export default Doa;