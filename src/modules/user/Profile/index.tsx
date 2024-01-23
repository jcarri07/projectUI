import React, {useState} from 'react';
import {Avatar, Box, CheckCircleIcon, HStack, Text, VStack} from 'native-base';
import Header from '../../../components/Header';
import {TouchableOpacity} from 'react-native';
import TabButton from '../../../components/TabButton';

const listOptions = [
  {
    name: 'Location Services',
    icon: 'name',
  },
  {
    name: 'Notifications',
    icon: 'name',
  },
  {
    name: 'General',
    icon: 'name',
  },
  {
    name: 'Privacy',
    icon: 'name',
  },
  {
    name: 'Help Center',
    icon: 'name',
  },
  {
    name: 'Settings',
    icon: 'name',
  },
];

export default function Profile({navigation}: any) {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  return (
    <Box flex={1} alignItems="center" bg="#F5F6FA">
      <Header navigation={navigation} />
      <HStack
        justifyContent="space-between"
        paddingX="2"
        alignItems="center"
        top="1/4"
        w="90%"
        borderRadius="xl"
        bg="gray.200"
        height="12">
        <TabButton
          placeholder="Profile"
          active={activeTab === 'Profile'}
          onPress={() => handleTabPress('Profile')}
        />
        <TabButton
          placeholder="Statistics"
          active={activeTab === 'Statistics'}
          onPress={() => handleTabPress('Statistics')}
        />
      </HStack>
      <VStack height={'1/5'} />
      <VStack alignItems="center" marginBottom="10">
        <Avatar
          size="2xl"
          source={{
            uri: 'https://i.pinimg.com/564x/b3/f8/a9/b3f8a9ffb414e67cc998f6a5ae244dcd.jpg',
          }}
        />
        <VStack top="2" alignItems="center">
          <Text fontWeight="bold" color="#1c1c1c">
            Lionel Adres
          </Text>
          <Text color="gray.400">English Teacher</Text>
        </VStack>
      </VStack>
      <VStack flex={1} />
      <VStack
        space="4"
        paddingTop="10"
        paddingX="10"
        borderTopRadius="3xl"
        bg="#2A2D3F"
        w="full"
        height="2/3">
        {listOptions.map((item, index) => (
          <TouchableOpacity key={index}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text color="white">{item.name}</Text>
              <CheckCircleIcon color="green.300" />
            </HStack>
          </TouchableOpacity>
        ))}
      </VStack>
    </Box>
  );
}
