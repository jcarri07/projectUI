import {Text} from 'native-base';
import React from 'react';

interface TypesCustomTitle {
  title: string;
}

export default function CustomTitle({title}: TypesCustomTitle) {
  return (
    <Text color="#2A2D3F" fontWeight={'bold'} fontSize={24}>
      {title}
    </Text>
  );
}
