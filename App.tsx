import React from 'react';
import Main from './src';
import {NativeBaseProvider} from 'native-base';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}

export default App;
