import {SafeAreaView} from 'react-native';
import React from 'react';
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
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation}) => {
  const navigationCart = () => navigation.navigate('Cart');

  return (
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
          <TouchableOpacity
            style={{
              flexDirection: 'row',
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
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
  );
};
export default Header;
