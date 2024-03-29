import React from 'react';
import {AddIcon, Box, Button, HStack, Image, Text, VStack} from 'native-base';
import FavouriteButton from '../../../../components/FavouriteButton';
import {StyleSheet} from 'react-native';
import Header from '../../../../components/Header';
import {ProductTypes} from './types';
import RateComponent from '../../../../components/RateComponent';
import {useRoute} from '@react-navigation/native';

interface DetailScreenParams {
  itemId: string;
}

export default function ProductDetail(
  {navigation}: any,
  {
    image = 'https://i.pinimg.com/564x/9e/50/00/9e50009c3971bbbd14f53e0daf5b4a45.jpg',
    price = 87.0,
    productName = 'Product',
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam harum exercitationem aspernatur consequuntur at id odio quaerat! Voluptatum sit consequatur accusantium odio fugit beatae, repudiandae temporibus corporis, minus quos blanditiis!',
    rate = 3,
  }: ProductTypes,
) {
  const route = useRoute();
  const {itemId} = route.params as DetailScreenParams;

  return (
    <Box flex={1} bg="#F5F6FA">
      <Box bg="#ffff" borderBottomLeftRadius={'50'} height={'50%'} shadow="7">
        <Header navigation={navigation} />
        <Image
          src={image}
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
            ${price}
          </Text>
          <Text fontWeight="semibold" color="primary.900">
            {productName}
          </Text>
        </VStack>
        <RateComponent rate={rate} />
      </HStack>
      <HStack paddingX={'4'} height="12" width="full" bottom="16">
        <HStack space={'2'}>
          <Text fontSize="12" color="darkText">
            Color option
          </Text>
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
        </HStack>
      </HStack>
      <VStack h={10} />
      <HStack position="absolute" paddingX={'4'} width="full" bottom={'20'}>
        <VStack>
          <Text color="primary.900">Description</Text>
          <Text fontSize="12" textAlign="justify" color="#B9B9CE">
            {description}
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
          onPress={() => console.log('id: ' + itemId)}>
          <HStack alignItems="center">
            <AddIcon style={styles.button} />
            <Text color="white"> Add to Cart</Text>
          </HStack>
        </Button>
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
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
