import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBackIcon, Box, HStack, Text} from 'native-base';
import CartButton from '../CartButton';

export default function Header({navigation}: any) {
  return (
    <HStack
      paddingX="4"
      width="full"
      height="10"
      position="absolute"
      zIndex={1}
      marginTop="10"
      justifyContent="space-between"
      alignItems="center">
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Box
          backgroundColor="white"
          width={10}
          height={10}
          opacity={0.8}
          justifyContent="center"
          alignItems="center"
          borderRadius="full">
          <ArrowBackIcon color={'black'} size={'5'} />
        </Box>
      </TouchableOpacity>
      <Text fontWeight="bold" color="gray.300" fontSize="lg">
        Product
      </Text>
      <Box
        backgroundColor="white"
        width={10}
        height={10}
        opacity={0.8}
        justifyContent="center"
        alignItems="center"
        borderRadius="full">
        <CartButton navigation={navigation} />
      </Box>
    </HStack>
  );
}
