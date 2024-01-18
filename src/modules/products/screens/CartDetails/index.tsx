import React from 'react';
import {Box, VStack} from 'native-base';
import Header from '../../../../components/Header';
import Product from '../../../../components/Product';

export default function CartDetails({navigation}: any) {
  return (
    <Box flex={1} alignItems="center" backgroundColor="#F5F6FA">
      <Header navigation={navigation} />
      <VStack marginBottom="1/4" />
      <VStack height="full" width="full">
        <Product />
        <Product />
      </VStack>
    </Box>
  );
}
