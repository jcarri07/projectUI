import React from 'react';
import {HStack, Pressable, Text} from 'native-base';

interface TabButtonTypes {
  active: boolean;
  placeholder: string;
  onPress?: () => void;
}

export default function TabButton({
  active = false,
  placeholder,
  onPress,
}: TabButtonTypes) {
  return (
    <Pressable
      w={'47%'}
      h="4/5"
      bg={active ? 'white' : 'gray.200'}
      borderRadius="xl"
      onPress={onPress}>
      <HStack justifyContent="center" alignItems="center">
        <Text marginTop="2" color="gray.400">
          {placeholder}
        </Text>
      </HStack>
    </Pressable>
  );
}
