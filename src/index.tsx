import React from 'react';
import {
  Box,
  HStack,
  FlatList,
  Input,
  SearchIcon,
  HamburgerIcon,
} from 'native-base';
import Card from './components/Card';
import CustomTitle from './components/CustomTitle';
import HorizontalCard from './components/HorizontalCard';
import {TouchableOpacity} from 'react-native';
import CartIconSvg from './icons/Cart';
import UserIconSvg from './icons/User';
import {data} from './utils';

export default function Main() {
  return (
    <Box flex={1} bg="#F5F6FA" alignItems="center" justifyContent="center">
      <HStack justifyContent="space-between" width={'5/6'} height="10">
        <TouchableOpacity onPress={() => console.log('Burguer')}>
          <Box justifyContent="center" alignItems="center">
            <HamburgerIcon size={8} />
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('User')}>
          <Box
            width={'10'}
            height={'10'}
            backgroundColor="#2A2D3F"
            borderRadius="lg">
            <UserIconSvg />
          </Box>
        </TouchableOpacity>
      </HStack>
      <Box padding={4} width={'full'} height={'3/4'}>
        <HStack>
          <Box padding="2" width={'5/6'}>
            <Input
              InputLeftElement={<SearchIcon left={2} size={6} />}
              borderRadius={'xl'}
              placeholderTextColor="#B9B9CE"
              size="md"
              placeholder="Search"
              backgroundColor="#ffff"
              borderColor="white"
              shadow={'7'}
            />
          </Box>
          <TouchableOpacity>
            <Box
              marginTop={'2'}
              padding={'3'}
              width="12"
              height="12"
              justifyContent="center"
              alignItems="flex-end">
              <CartIconSvg />
            </Box>
          </TouchableOpacity>
        </HStack>
        <CustomTitle title="Explore" />
        <HStack height={'72'}>
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
        <Box paddingBottom="4">
          <CustomTitle title="Best Selling" />
        </Box>
        <HStack
          justifyContent="center"
          alignItems="flex-start"
          paddingX={15}
          height={'2/6'}
          width={'full'}>
          <HorizontalCard />
        </HStack>
      </Box>
    </Box>
  );
}
