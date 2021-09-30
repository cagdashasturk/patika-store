import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: height / 2.5,
    margin: 5,
    backgroundColor : 'lightgray',
    borderRadius: 10,
    padding: 10,
  },
  image: {
    height: 160,
    borderRadius:10,
  },
  text_container: {
    flex:1,
    justifyContent: 'space-between',
    marginTop: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 15,
  },
  stock: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'right',
  }
})