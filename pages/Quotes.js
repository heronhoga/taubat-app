import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const QuoteCard = () => {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        setQuotesData(data);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchData();
  }, []);

  const cleanAuthor = (author) => {
    return author.replace(', type.fit', '');
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Text style={styles.cardAuthor}>{cleanAuthor(item.author)}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={quotesData}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 8,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    height: 100, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 8,
  },
  cardAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default QuoteCard;
