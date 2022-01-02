import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  openDrawer,
  FlatList,
  TextInput,
} from 'react-native';
// import Header from '../components/Header';
// import Bottom from '../components/Bottom';
import BookCard from '../components/BookCard';
import CreateBookNote from '../components/CreateBookNote';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../components/Cart';

const HomeScreen = ({navigation}) => {
  const [state, setState] = useState('');

  // const navigateCart = () => navigation.navigate('MyDrawer');
  return (
    <View style={{flex: 1}}>
      <View>
        {/* <Header style={{flex: 1}} navigation={props.navigation}></Header> */}

        <View style={{flex: 1}}>
          <View
            style={[
              {
                height: 50,
                marginTop: 1,
                borderWidth: 0.5,
                borderColor: '#d4d4d4',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: `#a52a2a`,
              },
              {flexDirection: 'row'},
            ]}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginLeft: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {}}>
                <Icons
                  style={{color: `#f0f8ff`}}
                  name="book-open-variant"
                  size={25}
                  color="#525252"
                />
                <Text
                  style={{
                    color: `#f0ffff`,
                    marginLeft: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Bookstore
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                height: 40,
                marginTop: 5,
                marginBottom: 5,
                borderWidth: 0.5,
                borderColor: '#d4d4d4',
                width: 220,
                backgroundColor: `#a9a9a9`,
                flexDirection: 'row',
              }}>
              <TextInput
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 16,
                  paddingLeft: 1,
                }}
                placeholder="search"
                onChangeText={() => {}}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              {/* <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}
                onPress={ButtonDrawer}> */}
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}
                // onPress={() => {
                //   navigation.navigate('Cart')}}
              >
                <Text style={{color: `#f0ffff`}}>Cart</Text>
                <Icons
                  style={{color: `#f0f8ff`}}
                  name="cart-outline"
                  size={25}
                  color="#525252"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 50}}>
        <CreateBookNote />
      </View>
    </View>
  );
};

{
  /* 
      <View style={{flex: 1, marginBottom: 500, padding: 50}}></View>
      <View style={{flex: 1, paddingTop: 160}}>
        <FlatList
          data={state}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{paddingTop: 2, padding: 2}}
              key={item.id}
              onPress={() =>
                props.navigation.navigate('CreateBookNote', {
                  noteData: item,
                  edit: true,
                })
              }></TouchableOpacity>
          )}
          numColumns={2}
          key={2}
        />
      
      </View> */
}

export default HomeScreen;
