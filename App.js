/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import HomeScreen from './src/screens/Home';
// import Cart from './src/components/Cart';
// import CreateBookNote from './src/components/CreateBookNote';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#F5F6FA'}}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="HomeScreen"
//           screenOptions={{headerShown: false}}>
//           <Stack.Screen
//             component={HomeScreen}
//             name="HomeScreen"
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             component={Cart}
//             name="Cart"
//             options={{headerShown: false}}
//           />
//           <Stack.Screen
//             component={CreateBookNote}
//             name="CreateBookNote"
//             options={{headerShown: false}}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaView>
//   );
// };

// export default App;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ShoopingCartScreen from './src/screens/ShoopingCartScreen';
import CustomerDetailsScreen from './src/screens/CustomerDetailsScreen';
import orderScreen from './src/screens/orderScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="CartScreen" component={ShoopingCartScreen} />
        <Stack.Screen
          name="CustomerDetails"
          component={CustomerDetailsScreen}
        />
        <Stack.Screen name="orderScreen" component={orderScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
