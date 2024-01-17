import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Box} from 'native-base';

interface TypesButtonCircle {
  onPress: () => void;
  background: string;
  children: Element;
}

export default function CircleButton({
  onPress,
  background,
  children,
}: TypesButtonCircle) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        justifyContent="center"
        alignItems="center"
        background={background}
        height={8}
        width={8}
        borderRadius={100}
        bottom="2">
        {children}
      </Box>
    </TouchableOpacity>
  );
}
