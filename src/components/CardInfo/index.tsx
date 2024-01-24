import React from 'react';
import {Avatar, Box, HStack, InfoIcon, Text, VStack} from 'native-base';

export default function CardInfo() {
  return (
    <Box h={'1/3'} w="90%" bgColor="white" borderRadius="3xl" shadow="5">
      <HStack padding="6" justifyContent="space-between">
        <HStack>
          <Avatar
            size="md"
            source={{
              uri: 'https://i.pinimg.com/564x/b3/f8/a9/b3f8a9ffb414e67cc998f6a5ae244dcd.jpg',
            }}
          />
          <VStack paddingX="2">
            <Text fontWeight="bold" color="#1c1c1c">
              Lionel Adres
            </Text>
            <Text color="gray.400">lioneladre@gmail.com</Text>
          </VStack>
        </HStack>
        <HStack alignItems="center">
          <InfoIcon size={'6'} />
        </HStack>
      </HStack>
      <VStack paddingX="8" space="2">
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="gray.400" fontWeight="bold">
            Status
          </Text>
          <Box
            justifyContent="center"
            alignItems="center"
            paddingY="1"
            paddingX="3"
            bg="red.100"
            borderRadius="full">
            <Text color="red.400" fontWeight="bold">
              New Member
            </Text>
          </Box>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="gray.400" fontWeight="bold">
            Costumer ID
          </Text>
          <Text color="gray.400" fontWeight="bold">
            #1826388
          </Text>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="gray.400" fontWeight="bold">
            Retained
          </Text>
          <Text color="gray.400" fontWeight="bold">
            56 min ago
          </Text>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="gray.400" fontWeight="bold">
            Amount
          </Text>
          <Text color="gray.400" fontWeight="bold">
            $400.00
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
