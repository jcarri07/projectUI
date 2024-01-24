import React from 'react';
import {HStack, Text} from 'native-base';
import StarFillIconSvg from '../../icons/StarFill';
import StarIconSvg from '../../icons/Star';

interface RateTypes {
  rate: number;
}

export default function RateComponent({rate}: RateTypes) {
  const clampedRate = Math.min(Math.max(rate, 1), 5);

  const stars = Array.from({length: 5}, (_, index) => {
    if (index < clampedRate) {
      return <StarFillIconSvg key={index} />;
    } else {
      return <StarIconSvg key={index} />;
    }
  });

  return (
    <HStack alignItems="flex-end" height="12" width="20">
      <HStack justifyContent="center" alignItems="center">
        {stars}
        <Text marginX="2" color="primary.900" fontWeight="bold">
          {rate}
        </Text>
      </HStack>
    </HStack>
  );
}
