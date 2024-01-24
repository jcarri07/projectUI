import {ArrowForwardIcon, Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {HorizontalCardTypes} from './types';

export default function HorizontalCard(
  {navigation}: any,
  {
    image = 'https://i.pinimg.com/564x/cc/a8/3a/cca83a3fffd7c42b90ff722a3a22687c.jpg',
    productName = 'Vintange Chair',
    description = 'Description',
    price = 200.0,
  }: HorizontalCardTypes,
) {
  return (
    <Box
      backgroundColor={'#ffff'}
      height={'1/2'}
      width={'full'}
      borderRadius={'2xl'}
      style={styles.shadow}
      justifyContent="center">
      <HStack>
        <HStack
          width="1/3"
          height="20"
          justifyContent="center"
          alignItems="center">
          <Image
            borderRadius="2xl"
            src={image}
            height="4/5"
            width="3/5"
            alt="Image card"
          />
        </HStack>
        <VStack justifyContent="center" width="2/5" height="20">
          <Text fontWeight="bold" color="#2A2D3F">
            {productName}
          </Text>
          <Text color="#B9B9CE">{description}</Text>
          <Text color="#2A2D3F">${price}</Text>
        </VStack>
        <HStack
          width="1/4"
          height="20"
          justifyContent="flex-end"
          alignItems="flex-end"
          padding="2">
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {itemId: '2'})}>
            <Box
              backgroundColor="#2A2D3F"
              height={8}
              width={8}
              borderRadius="lg"
              justifyContent="center"
              alignItems="center">
              <ArrowForwardIcon style={styles.colorIcon} />
            </Box>
          </TouchableOpacity>
        </HStack>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,

    elevation: 5,
  },

  colorIcon: {
    color: '#ffff',
  },
});
