import React from 'react';
import {Box, Text, VStack} from 'native-base';
import ListMethodPay from '../ListMethodPay';

export default function CardTransactions() {
  return (
    <Box
      shadow="5"
      w="90%"
      height={'2/5'}
      bg="primary.900"
      marginTop="2"
      borderRadius="3xl">
      <VStack padding="4" space="4">
        <Text paddingLeft="2" fontWeight="bold" color="white" fontSize="md">
          Payment Method
        </Text>
        <ListMethodPay
          description="Credit Card"
          srcImage="https://i.pinimg.com/564x/71/2a/82/712a8255113f10fed9712c7ef48bfcc4.jpg"
        />
        <ListMethodPay
          description="Paypal"
          srcImage="https://i.pinimg.com/564x/f4/22/30/f42230e621c19fea5815dde7a09ed83c.jpg"
        />
        <ListMethodPay
          description="Google Pay"
          srcImage="https://i.pinimg.com/564x/05/3c/59/053c59b7ba37051bc7886ec935f6da25.jpg"
        />
      </VStack>
    </Box>
  );
}
