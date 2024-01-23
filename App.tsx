import React from 'react';
import Main from './src';
import {NativeBaseProvider} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from './src/modules/products/screens/ProductDetail';
import {NavigationContainer} from '@react-navigation/native';
import CartDetails from './src/modules/products/screens/CartDetails';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Profile from './src/modules/user/Profile';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={CartDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={ProductDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
