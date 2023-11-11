import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardMain from "../components/CardMain";
import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

function Doa() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

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

  const renderItem = ({ item }) => <CardMain data={item} />;

  return (
    <View style={styles.container}>
      <TextInput
        label="Cari Judul Doa..."
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
          filterData(text);
        }}
        style={styles.searchBarContainer}
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
    borderBottomColor: "transparent",
    borderTopColor: "transparent", 
    borderWidth: 0, 
    borderRadius: 20, 
  },
});

export default Doa;
