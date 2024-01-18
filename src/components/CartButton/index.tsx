import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import CartIconSvg from '../../icons/Cart';

export default function CartButton() {
  return (
    <TouchableOpacity>
      <Box
        padding={'3'}
        width="12"
        height="12"
        justifyContent="center"
        alignItems="flex-end">
        <CartIconSvg />
      </Box>
    </TouchableOpacity>
  );
}
