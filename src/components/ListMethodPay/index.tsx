import React from 'react';
import {CheckIcon, HStack, Image, Text} from 'native-base';

interface ListMethodPayTypes {
  srcImage: string;
  description: string;
}

export default function ListMethodPay({
  srcImage,
  description,
}: ListMethodPayTypes) {
  return (
    <HStack justifyContent="space-between" alignItems="center" paddingX="2">
      <HStack space={'2'} alignItems="center">
        <Image
          bg="white"
          source={{
            uri: srcImage,
          }}
          alt="Master Card"
          size={50}
          resizeMode="contain"
          borderRadius="full"
        />
        <Text color="white" fontWeight="bold" fontSize="md">
          {description}
        </Text>
      </HStack>
      <CheckIcon />
    </HStack>
  );
}
