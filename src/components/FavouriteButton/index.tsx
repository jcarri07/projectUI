import {Box, FavouriteIcon} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function FavouriteButton() {
  return (
    <TouchableOpacity>
      <Box
        paddingX="5/6"
        alignItems="flex-end"
        width="full"
        height="1/6"
        paddingLeft="80">
        <Box
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          backgroundColor="white"
          height="12"
          width="12"
          bottom={5}
          shadow="7">
          <FavouriteIcon style={style.colorIcon} />
        </Box>
      </Box>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  colorIcon: {
    color: 'red',
    width: 20,
    height: 20,
  },
});
