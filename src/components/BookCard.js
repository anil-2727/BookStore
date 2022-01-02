// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// export const BookCard = props => {
//   return (
//     <View style={[styles.container]}>
//       <View>
//         <Text style={styles.title}>

//         </Text>
//         <Text style={styles.content}>
//           {props.content ? props.content : 'content'}
//         </Text>
//         {/* <Text style={styles.status}>
//           {props.status ? props.status : 'status'}
//         </Text> */}
//       </View>
//     </View>
//   );
// };

// export default BookCard;

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderColor: '#d4d4d4',
//     margin: 6,
//     padding: 5,
//     height: 250,
//     width: 30,
//     borderRadius: 10,
//   },

//   title: {
//     fontSize: 15,
//     fontWeight: '600',
//     marginBottom: 10,
//     color: '#525252',
//   },

//   content: {
//     color: '#525252',
//     textAlign: 'auto',
//   },
// });

import React, {useEffect, useState} from 'react';
import react, {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const BookCard = props => {
  return (
    <View style={{flex: 1, paddingTop: 40}}>
      <Text>Books</Text>
      <View style={[styles.container]}>
        <View>
          <Text style={styles.title}>{'image'}</Text>
          <Text style={styles.content}>{}</Text>
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    margin: 10,
    paddingTop: 10,
    borderRadius: 10,
    height: 200,
    width: 50,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#525252',
  },

  content: {
    color: '#525252',
    textAlign: 'auto',
  },
});
