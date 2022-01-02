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

const Bottom = () => {
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
            backgroundColor: `#8B0000`,
          },
          {flexDirection: 'row'},
        ]}></View>
    </View>
  );
};
export default Bottom;
