import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import CardMain from "../components/CardMain";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import { TextInput } from "react-native-paper";

function Doa() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Filtered data based on user input
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState(""); // User input for search
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

  const filterData = (text) => {
    console.log("Filtering with Text:", text);
    const filtered = data.filter((item) =>
      item.doa.toLowerCase().includes(text.toLowerCase())
    );
    console.log("Filtered Data:", filtered);
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <CardMain title={item.doa} meaning={item.artinya} />
  );

  return (
    <View style={styles.container}>
      
      <TextInput
        label="Search for Doa..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          filterData(text);
        }}
        style={styles.searchInput}
      />
      {isLoading ? (
        <Text>Loading...</Text>
        
      ) : (
        
        <FlatList
          data={searchText ? filteredData : data}
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
    top: 10,
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
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent", // Remove the border at the bottom
    borderTopColor: "transparent", // Remove the border at the top
    borderWidth: 0, // Remove the border
    borderRadius: 20, // Customize the border radius
  },

  searchBarInputContainer: {
    backgroundColor: "white",
    borderRadius: 20, // Customize the border radius
  },
});

export default Doa;
