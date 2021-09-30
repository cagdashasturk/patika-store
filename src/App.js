import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import ProductCard from './components/ProductCard';

import products_data from './products_data.json';

const App = () => {

  const renderProduct = ({ item }) => <ProductCard product={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <FlatList
        data={products_data}
        renderItem={renderProduct}
        numColumns={2}
        horizontal={false}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
})