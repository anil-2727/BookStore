import React, {useEffect, useState} from 'react';
import react, {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

// import styles from '../../../fundoonotes/src/css/logincss';

const CreateBookNote = () => {
  const [image, setImage] = useState('');
  const [bookName, setBookName] = useState('');
  const [authName, setAuthName] = useState('');
  const [amount, setAmount] = useState();

  return (
    <View style={{flex: 1, borderWidth: 1}}>
      <View>
        <Image source={require('../assets/book.jpg')} style={styles.image} />

        <TextInput
          style={styles.bookTitle}
          placeholder="book title"
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.bookAuth}
          placeholder="author name"
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.amount}
          placeholder="rs"
          onChangeText={() => {}}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.addtobag} onPress={() => {}}>
            <Text style={{fontSize: 16, alignSelf: 'center'}}>ADD TO BAG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishList} onPress={() => {}}>
            <Text style={{fontSize: 16, alignSelf: 'center'}}>WISHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default CreateBookNote;

const styles = StyleSheet.create({
  bookTitle: {
    borderColor: '#777',
    marginLeft: 15,
    height: 40,
    padding: 10,
    marginLeft: 50,
    width: '90%',
    borderRadius: 8,
    fontWeight: 'bold',
  },
  bookAuth: {
    // borderWidth: 1,
    borderColor: '#777',
    marginLeft: 15,
    height: 40,
    marginTop: 5,
    width: '90%',
    borderRadius: 8,
    marginLeft: 50,
  },
  amount: {
    // borderWidth: 1,
    borderColor: '#777',
    marginLeft: 15,
    height: 40,
    marginTop: 5,
    width: '90%',
    borderRadius: 8,
    marginLeft: 50,
    fontWeight: 'bold',
  },
  addtobag: {
    borderWidth: 1,
    borderColor: '#777',
    marginLeft: 15,
    height: 40,
    marginTop: 5,
    width: '30%',
    borderRadius: 8,
    backgroundColor: `#a52a2a`,
    marginLeft: 80,
  },
  wishList: {
    borderWidth: 1,
    borderColor: '#777',
    marginLeft: 15,
    height: 40,
    marginTop: 5,
    width: '30%',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  image: {
    marginTop: 50,
    width: '30%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
