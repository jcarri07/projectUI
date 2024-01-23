import React from 'react';
import {HStack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function AddButton() {
  return (
    <HStack
      justifyContent="center"
      width="16"
      height="6"
      borderColor="gray.300"
      borderWidth={2}
      borderRadius="xl">
      <HStack justifyContent="center" width={'1/3'}>
        <TouchableOpacity>
          <Text color="gray.600" fontWeight="bold" fontSize="sm">
            -
          </Text>
        </TouchableOpacity>
      </HStack>
      <HStack justifyContent="center" width={'1/3'}>
        <TouchableOpacity>
          <Text color="gray.600" fontWeight="bold" fontSize="sm">
            1
          </Text>
        </TouchableOpacity>
      </HStack>
      <HStack justifyContent="center" width={'1/3'}>
        <TouchableOpacity>
          <Text color="gray.600" fontWeight="bold" fontSize="sm">
            +
          </Text>
        </TouchableOpacity>
      </HStack>
    </HStack>
  );
}
