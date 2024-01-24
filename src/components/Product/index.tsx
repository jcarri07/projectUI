import React from 'react';
import {HStack, Image, VStack, Text, CheckIcon} from 'native-base';
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
        <CheckIcon color="green.300" size={'6'} />
      </HStack>
      <HStack
        justifyContent="center"
        alignItems="center"
        width="30%"
        height="full">
        <Image
          src="https://i.pinimg.com/564x/9e/50/00/9e50009c3971bbbd14f53e0daf5b4a45.jpg"
          alt="Product Image"
          padding="10"
          borderRadius="2xl"
        />
      </HStack>
      <VStack padding="4" space="6" width="60%" height="full">
        <Text fontWeight="bold" color="primary.900">
          Minimalist Chair
        </Text>
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
