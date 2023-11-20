import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailQuote = ({ route }) => {
  const { quote } = route.params;

  const author = quote.author;
  const cleanAuthor = (author) => {
    return author.replace(", type.fit", "");
  };

  const cleanedAuthor = cleanAuthor(author);
  return (
    <View style={styles.container}>
      <Text>KATA-KATA HARI INI</Text>
      <Text style={styles.author}>{cleanedAuthor}</Text>
      <Text style={styles.quote}>{quote.text}</Text>
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
  author: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  quote: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default DetailQuote;
