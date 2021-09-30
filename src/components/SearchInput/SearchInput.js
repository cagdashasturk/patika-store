import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import styles from './SearchInput.style';


const SearchInput = () => {

  const [text, onChangeText] = useState('')

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={onChangeText}
      placeholder={'Ara..'}
    />

  );
}

export default SearchInput;
