import React from 'react';
import {AddIcon, Box, Button, HStack, Image, Text, VStack} from 'native-base';
import FavouriteButton from '../../../../components/FavouriteButton';
import {StyleSheet} from 'react-native';
import StarIconSvg from '../../../../icons/Star';
import StarFillIconSvg from '../../../../icons/StarFill';
import Header from '../../../../components/Header';

export default function ProductDetail({navigation}: any) {
  return (
    <Box flex={1} bg="#F5F6FA">
      <Box borderBottomLeftRadius={'50'} height={'50%'} shadow="7">
        <Header navigation={navigation} />
        <Image
          src="https://i.pinimg.com/564x/91/af/7c/91af7c97b4efbe2f1959f42dc551a339.jpg"
          alt="image product"
          height="full"
          borderBottomLeftRadius={'50'}
        />
      </Box>
      <HStack left="14">
        <FavouriteButton />
      </HStack>
      <HStack
        justifyContent="space-between"
        width="full"
        height="16"
        bottom="16"
        paddingX="4">
        <VStack>
          <Text fontWeight="black" fontSize="xl" color="red.400">
            $87.00
          </Text>
          <Text fontWeight="semibold">Minimal Chair</Text>
        </VStack>
        <HStack alignItems="flex-end" height="12" width="20">
          <StarFillIconSvg />
          <StarFillIconSvg />
          <StarFillIconSvg />
          <StarIconSvg />
          <StarIconSvg />
          <VStack left={'2'} top={'1'}>
            <Text fontWeight="bold" fontSize={12}>
              3.0
            </Text>
          </VStack>
        </HStack>
      </HStack>
      <HStack paddingX={'4'} height="12" width="full" bottom={'12'}>
        <VStack space={1}>
          <Text fontSize="12">Color option</Text>
          <HStack space={2}>
            <Box
              height={5}
              width={5}
              backgroundColor="green.800"
              borderRadius="full"
            />
            <Box
              height={5}
              width={5}
              backgroundColor="gray.200"
              borderRadius="full"
            />
            <Box
              height={5}
              width={5}
              backgroundColor="black"
              borderRadius="full"
            />
          </HStack>
        </VStack>
      </HStack>
      <HStack position="absolute" paddingX={'4'} width="full" bottom={'20'}>
        <VStack>
          <Text>Description</Text>
          <Text fontSize="12" textAlign="justify" color="#B9B9CE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi
            architecto molestias, voluptatibus modi necessitatibus. Libero
          </Text>
        </VStack>
      </HStack>
      <VStack />
      <Box flex={1} />
      <HStack width="full" justifyContent="flex-end">
        <Button
          left={1}
          borderTopLeftRadius="full"
          width="48"
          height="16"
          backgroundColor="#2A2D3F"
          onPress={() => console.log('Add to Cart')}>
          <HStack alignItems="center">
            <AddIcon style={style.button} />
            <Text color="white"> Add to Cart</Text>
          </HStack>
        </Button>
      </HStack>
    </Box>
  );
}

const style = StyleSheet.create({
  backgroundButton: {
    color: 'black',
    height: 25,
    width: 25,
  },

  button: {
    color: 'white',
    marginRight: 5,
  },
});
