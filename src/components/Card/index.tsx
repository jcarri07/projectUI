import React from 'react';
import {
  AddIcon,
  Box,
  FavouriteIcon,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';
import {StyleSheet} from 'react-native';
import CircleButton from '../CircleButton';

interface CardTypes {
  title: string;
  description: string;
  price: number;
  srcImage: string;
}

export default function Card({title, description, price, srcImage}: CardTypes) {
  return (
    <Box
      style={styles.shadow}
      borderRadius="3xl"
      background={'#ffff'}
      width="40"
      margin={'2'}
      height="5/6"
      padding="3">
      <Box height="3/5" borderRadius="3xl" alignItems="flex-end">
        <Image
          resizeMode="contain"
          height="full"
          width={'100%'}
          borderRadius={'2xl'}
          src={srcImage}
          alt="Card Image"
        />
        <Box
          position={'absolute'}
          // style={styles.shadow}
          alignItems="center"
          top={'4'}
          right={'2'}
          justifyContent="center">
          <CircleButton
            background="#F26B6B"
            children={<FavouriteIcon style={styles.colorIcon} />}
            onPress={() => console.log('favorite')}
          />
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
        <CircleButton
          onPress={() => console.log('Add')}
          background="#2A2D3F"
          children={<AddIcon style={styles.colorIcon} />}
        />
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
