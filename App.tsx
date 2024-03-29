import React from 'react';
import Main from './src';
import {NativeBaseProvider, extendTheme} from 'native-base';
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
  const theme = extendTheme({
    colors: {
      primary: {
        400: '#12153A',
        500: '#0E104C',
        600: '#0B0C3C',
        700: '#080926',
        800: ' #040513',
        900: '#2A2D3F',
      },
      secondary: {
        900: '#ffff',
      },
      tertirary: {
        900: '#F5F6FA',
      },
      background: {
        100: '#F5F6FA',
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
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
