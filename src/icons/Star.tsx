import {Box} from 'native-base';
import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default function StarIconSvg(
  props: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<React.Component<SvgProps, any, any>> &
    Readonly<SvgProps>,
) {
  return (
    <Box width={3} height={3}>
      <Svg fill="none" viewBox="0 0 21 20" {...props}>
        <Path
          stroke="orange"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
        />
      </Svg>
    </Box>
  );
}
