import React from 'react';
import {CheckIcon, HStack, Image, VStack, Text} from 'native-base';
import AddButton from '../AddButton';

export default function Product() {
  return (
    <HStack width="full" height="1/6">
      <HStack
        paddingX="8"
        justifyContent="flex-start"
        alignItems="center"
        width="10%"
        height="full">
        <CheckIcon />
      </HStack>
      <HStack
        justifyContent="center"
        alignItems="center"
        width="30%"
        height="full">
        <Image
          src="https://i.pinimg.com/564x/91/af/7c/91af7c97b4efbe2f1959f42dc551a339.jpg"
          alt="Product Image"
          padding="10"
          borderRadius="2xl"
        />
      </HStack>
      <VStack padding="4" space="6" width="60%" height="full">
        <Text fontWeight="bold">Minimalist Chair</Text>
        <HStack justifyContent="space-between" width="80%">
          <Text color="red.400" fontWeight="bold">
            $174.00
          </Text>
          <AddButton />
        </HStack>
      </VStack>
    </HStack>
  );
}
