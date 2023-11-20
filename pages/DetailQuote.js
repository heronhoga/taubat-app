import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DetailQuote = ({ route }) => {
  const { quote } = route.params;
  const navigation = useNavigation();

  const author = quote.author;
  const cleanAuthor = (author) => {
    return author.replace(", type.fit", "");
  };

  const cleanedAuthor = cleanAuthor(author);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
      <View style={styles.quoteContainer}>
        <View style={styles.roundedBorder}>
          <Text style={styles.author}>{cleanedAuthor}</Text>
          <Text style={styles.quote}>{quote.text}</Text>
        </View>
      </View>
      <View style={styles.decorationContainer}>
        <View style={styles.decorationLine}></View>
        <Text style={styles.decorationText}>WORDS TODAY</Text>
        <View style={styles.decorationLine}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  quote: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
  goBackButton: {
    top: 30,
    padding: 10,
    backgroundColor: "#3498db",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  quoteContainer: {
    alignItems: "center",
  },
  roundedBorder: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#3498db",
  },
  decorationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  decorationLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#3498db",
    marginHorizontal: 8,
  },
  decorationText: {
    color: "#3498db",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailQuote;
