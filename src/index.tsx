import React from 'react';
import {Text, Box, HStack, FlatList} from 'native-base';
import Card from './components/Card';

const data = [
  {
    title: 'Elegant Chair',
    description: 'Description',
    price: 250.0,
  },
  {
    title: 'Elegant Chair 2',
    description: 'Description',
    price: 250.0,
  },
  {
    title: 'Elegant Chair 3',
    description: 'Description',
    price: 250.0,
  },
];

export default function Main() {
  return (
    <Box flex={1} bg="#F5F6FA" alignItems="center" justifyContent="center">
      <Box padding={4} width={'full'} height={'3/4'}>
        <Text color="#2A2D3F" fontWeight={'bold'} fontSize={24}>
          Explore
        </Text>
        <HStack height={'xs'}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({item, index}) => (
              <Box key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              </Box>
            )}
          />
        </HStack>
      </Box>
    </Box>
  );
}
