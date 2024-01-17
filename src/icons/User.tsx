import {Box} from 'native-base';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function UserIconSvg(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps>,
) {
  return (
    <Box width={'100%'} height={'100%'} padding={'2'}>
      <Svg {...props}>
        <Path
          fill={'#fff'}
          stroke="#ffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 21a7 7 0 1 1 14 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        />
      </Svg>
    </Box>
  );
}
