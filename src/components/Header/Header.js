import React from 'react';
import { View, Text} from 'react-native';
import styles from './Header.style';

const Header =  () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
    </View>
  );
}

export default Header;

