import React from 'react';
import {Box, HStack, Image, Text, VStack} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface CardTypes {
  title: string;
  description: string;
  price: number;
}

export default function Card({title, description, price}: CardTypes) {
  return (
    <Box
      style={styles.shadow}
      borderRadius="3xl"
      background={'#ffff'}
      width="40"
      margin={'2'}
      height="3/4"
      padding="3">
      <Box
        background="amber.300"
        height="3/5"
        borderRadius="3xl"
        alignItems="flex-end">
        <Image
          height={'100%'}
          width={'100%'}
          borderRadius={'2xl'}
          src="https://i.pinimg.com/564x/91/af/7c/91af7c97b4efbe2f1959f42dc551a339.jpg"
          alt="Card Image"
        />
        <Box
          position={'absolute'}
          style={styles.shadow}
          alignItems="center"
          top={'2'}
          right={'2'}
          borderRadius={'full'}
          height={9}
          width={9}
          backgroundColor={'#F26B6B'}
          justifyContent="center">
          <TouchableOpacity>
            <Text color="#ffff" fontWeight="black">
              :3
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <VStack p={'2'}>
        <Text fontWeight={'bold'} fontSize="sm" color="#2A2D3F">
          {title}
        </Text>
        <Text color="#B9B9CE">{description}</Text>
      </VStack>
      <HStack px={'2'} justifyContent="space-between">
        <Text>${price}</Text>
        <TouchableOpacity>
          <Box
            justifyContent="center"
            alignItems="center"
            background="#2A2D3F"
            height={8}
            width={8}
            borderRadius={'full'}
            bottom="2">
            <Text color="#ffff" fontSize="lg">
              +
            </Text>
          </Box>
        </TouchableOpacity>
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
});
