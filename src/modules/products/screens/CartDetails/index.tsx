import React, {useState} from 'react';
import {Box, Button, Divider, HStack, Modal, Text, VStack} from 'native-base';
import Header from '../../../../components/Header';
import Product from '../../../../components/Product';

export default function CartDetails({navigation}: any) {
  const [placement, setPlacement] = React.useState('');
  const [open, setOpen] = useState(false);

  const openModal = (placement: string) => {
    setOpen(true);
    setPlacement(placement);
  };

  return (
    <Box flex={1} alignItems="center" backgroundColor="#F5F6FA">
      <Header navigation={navigation} />
      <VStack marginBottom="1/4" />
      <VStack height="4/5" width="full">
        <Product />
        <Product />
      </VStack>
      <Button
        borderRadius="full"
        height={'16'}
        width={'16'}
        bottom="10"
        bgColor="white"
        shadow="5"
        left="20%"
        onPress={() => openModal('bottom')}>
        <Text fontSize="2xl" color="gray.500">
          $
        </Text>
      </Button>
      <Modal
        shadow="7"
        size="full"
        isOpen={open}
        onClose={() => setOpen(false)}
        safeAreaTop={true}>
        <Modal.Content
          bgColor="white"
          height="64"
          borderRadius="30"
          maxWidth="350"
          {...styles[placement]}>
          <Modal.Body>
            <VStack paddingX="3" space={'2'} marginTop="10">
              <HStack justifyContent="space-between">
                <Text fontWeight="light" color="primary.900">
                  Selected Items
                </Text>
                <Text fontWeight="bold" color="red.400">
                  $513.00
                </Text>
              </HStack>
              <HStack paddingBottom="4" justifyContent="space-between">
                <Text fontWeight="light" color="primary.900">
                  Shipping fee
                </Text>
                <Text fontWeight="bold" color="red.400">
                  $30.00
                </Text>
              </HStack>
              <Divider />
              <HStack
                marginBottom="4"
                marginTop="1"
                justifyContent="space-between">
                <Text fontSize="16" fontWeight="bold" color="primary.900">
                  Subtotal
                </Text>
                <Text fontSize="16" fontWeight="bold" color="red.400">
                  $543.00
                </Text>
              </HStack>
            </VStack>
            <HStack width="full" justifyContent="center">
              <Button width="90%" height="16" borderRadius="full" bg="#2A2D3F">
                Checkout
              </Button>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
}

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
  },
  right: {
    marginRight: 0,
  },
  center: {},
};
